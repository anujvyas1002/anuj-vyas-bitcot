import React from 'react'
import About from './About'
import Gallery from './Gallery'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';



 const App = () => {
  return (
    <div>

  <Router>
    <Header/>
    <Switch>
         <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/building">
            <About/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route> 
        </Switch>
    {/* <Home/>
    <Gallery/>
    <About/> */}
    </Router>
      
    </div>
  )
}
export default App;