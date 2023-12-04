import {Link} from 'react-router-dom'
import './index.css'

const CourseCard = props => {
  const {courseDetails} = props

  const {id, name, logoUrl} = courseDetails

  return (
    <Link to={`/courses/${id}`}>
      <div className="card-item">
        <li key={id} className="card-content">
          <img src={logoUrl} alt={name} />
          <p className="heading-1">{name}</p>
        </li>
      </div>
    </Link>
  )
}

export default CourseCard
