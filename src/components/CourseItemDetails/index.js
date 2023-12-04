import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import './index.css'

class CourseItemDetails extends Component {
  state = {
    courseItem: {},
    isLoading: true,
    isSuccessful: true,
  }

  componentDidMount() {
    this.getCourseItemDetails()
  }

  onClickRetryBtn = () => {
    this.getCourseItemDetails()
  }

  getCourseItemDetails = async () => {
    this.setState({isLoading: true})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/te/courses/${id}`,
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      const courseDetails = {
        description: data.course_details.description,
        imageUrl: data.course_details.image_url,
        name: data.course_details.name,
      }

      this.setState({courseItem: courseDetails, isLoading: false})
    } else {
      this.setState({isSuccessful: true})
    }
  }

  render() {
    const {courseItem, isLoading, isSuccessful} = this.state
    const {name, description, imageUrl} = courseItem
    return (
      <>
        {isSuccessful ? (
          <FailureView onClickRetryBtn={this.onClickRetryBtn} />
        ) : (
          <div>
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
              <div className="main-container">
                <div className="course-container">
                  <img src={imageUrl} alt="website logo" className="image" />
                  <div className="right-content">
                    <h1>{name}</h1>
                    <p className="description">{description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    )
  }
}

export default CourseItemDetails
