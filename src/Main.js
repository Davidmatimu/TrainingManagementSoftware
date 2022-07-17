import React, { Component } from "react";
import {Route,NavLink,HashRouter, Routes} from "react-router-dom";
import MyEmployees from "./components/Views/MyEmployees";
import MyRequests from "./components/Views/MyRequests";
import "./Main.css";
import { Button } from "@mui/material";
import Mapbox from "./components/Views/map";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Training Management System</h1>
          <Mapbox/>
          <ul className="header">
            <NavLink to="/">
            <Button type = 'submit' color = 'secondary' variant='contained'>My Requests</Button>
          </NavLink>
          <NavLink to="/">
            <Button type = 'submit' color = 'secondary' variant='contained'>My Employees</Button>
          </NavLink>

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

