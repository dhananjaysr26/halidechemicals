import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import Navbar from './Navbar'

function AppRouter() {
    return (
        <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    )
}

export default AppRouter
