import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Standings from "../pages/standings";
import Schedule from "../pages/schedule"

export default function MenuRoutes() {
    return (
            <Routes>
                <Route path="/schedule" element={<Schedule/>}></Route>
                <Route path="/standings" element={<Standings />}></Route>
            </Routes>
    )
}