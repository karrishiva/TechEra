import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link to="/bad-path">
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  </Link>
)

export default NotFound
