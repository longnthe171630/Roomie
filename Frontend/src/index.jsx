import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Homepage} from './screens/Homepage/Homepage';
import Login_Register from './screens/Login_Register/Login_Register';
import Roommate from './screens/Roommate/Roommate';
import RouteWrapper from './components/RouteWrapper';
import './index.css';

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <Router>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login_register" element={<Login_Register/>} />
          <Route path="/roommate" element={<Roommate/>} />
        </Routes>
      </RouteWrapper>
    </Router>
  </StrictMode>
);
