import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Standings from "../pages/Standings";
import Schedule from "../pages/Schedule";
import NewsDetail from "../pages/NewsDetail";
import EPL from "../pages/EPL";

export default function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/schedule/*" element={<Schedule />}></Route>
            <Route path="/standings/*" element={<Standings />}></Route>
            <Route path="/newsdetail" element={<NewsDetail />}></Route>
            <Route path="/news/epl" element={<EPL />}></Route> 
        </Routes>
    );
}
