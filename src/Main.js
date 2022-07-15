import React, { Component } from "react";
import {Route,NavLink,HashRouter, Routes} from "react-router-dom";
import MyEmployees from "./components/Views/MyEmployees";
import MyRequests from "./components/Views/MyRequests";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Training Management System</h1>
          <ul className="header">
            <li><NavLink to="/">My Requests</NavLink></li>
            <li><NavLink to="/MyEmployees">My Employees</NavLink></li>
            <li><NavLink to="/">All Employees</NavLink></li>
            <li><NavLink to="/">All Courses/Vendors</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path = "/" element = {<MyRequests/>}/>
              <Route exact path = "/MyEmployees" element = {<MyEmployees/>}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;