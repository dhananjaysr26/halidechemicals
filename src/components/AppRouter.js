import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Business from "./Business";
import Services from "./Services";
import Careers from "./Careers";
import Contact from "./Contact";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/business"  component={Business} />
        <Route path="/services"  component={Services} />
        <Route path="/careers"  component={Careers} />
        <Route path="/contact"  component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default AppRouter;
