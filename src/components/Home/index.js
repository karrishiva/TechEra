import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseCard from '../CourseCard'

import './index.css'
import FailureView from '../FailureView'

class Home extends Component {
  state = {
    coursesList: [],
    isLoading: true,
    isSuccess: false,
  }

  componentDidMount() {
    this.getCoursesApiUrl()
  }

  onClickRetry = () => {
    this.getCoursesApiUrl()
  }

  getCoursesApiUrl = async () => {
    this.setState({isLoading: true})
    const coursesApiUrl = `https://apis.ccbp.in/te/courses`

    const options = {
      method: 'GET',
    }

    const response = await fetch(coursesApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const courses = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))

      this.setState({coursesList: courses, isLoading: false})
    } else {
      this.setState({isSuccess: true})
    }
  }

  render() {
    const {coursesList, isLoading, isSuccess} = this.state
    return (
      <div>
        {isSuccess ? (
          <FailureView onClickRetryBtn={this.onClickRetryBtn} />
        ) : (
          <div>
            <h1 className="heading">Courses</h1>
            {isLoading ? (
              <div className="products-loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0b69ff"
                  height="50"
                  width="50"
                />
              </div>
            ) : (
              <ul className="courses-list">
                {coursesList.map(eachCourse => (
                  <CourseCard key={eachCourse.id} courseDetails={eachCourse} />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Home
