import React, { Component } from 'react';
import logo from './VEYM.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import About from "./pages/AboutUs";
import Regions from "./pages/Regions";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Store from "./pages/TNTTStore";
import Navbar from "./components/Navbar/";

// class App extends Component {
  
  // render() {
    
  //   return (
//       <Router>
        //   <div>
        //   <Navbar />
        //     <Switch>
        //       <Route exact path="/" component={Home} />
        //       <Route exact path="/about-us" component={About}/>
        //       <Route exact path="/our-regions" component={Regions} />
        //       <Route exact path="/news" component={News} />
        //       <Route exact path="/resources" component={Resources} />
        //       <Route exact path="/store" component={Store} />
        //       <Route component={NoMatch} />
        //     </Switch>
        // </div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         veym.net is under construction
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    //   </Router>
    // );
  // }
// }
const App = () => (
  <Router>
    <div>
  <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About}/>
      <Route exact path="/our-regions" component={Regions} />
      <Route exact path="/news" component={News} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/store" component={Store} />
      <Route component={NoMatch} />
    </Switch>
</div>
  </Router>
);

export default App;
