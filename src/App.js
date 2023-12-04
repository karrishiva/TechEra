import {Route, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'

import Home from './components/Home'
import './App.css'
import NavBar from './components/NavBar'
import CourseItemDetails from './components/CourseItemDetails'

// Replace your code here
const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/bad-path" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
