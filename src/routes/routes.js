import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import Schedule from "../pages/Schedule";
import NewsDetail from "../pages/NewsDetail";
import Standings from "../pages/Standings";

import CreateNews from "../components/CreateNews";
import NewsManager from "../pages/NewsManager"


import News from "../pages/News"

export default function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/standings/:league" element={<Standings />}></Route>
            <Route path="/news/:league" element={<News />}></Route>
            <Route path="/newsdetail/:newsID" element={<NewsDetail />}></Route>

            {/* <Route path="/create-news" element={<CreateNews />}></Route> */}
            <Route path="/news-manager" element={<NewsManager />}></Route>

            
        </Routes>
    );
}
