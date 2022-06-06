import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import EPLStandings from "../pages/EPLStandings";
import LaLigaStandings from "../pages/LaLigaStandings";
import SerieAStandings from "../pages/SerieAStandings";
import BundesligaStandings from "../pages/BundesligaStandings";
import Ligue1Standings from "../pages/Ligue1Standings";

import Schedule from "../pages/Schedule";
import NewsDetail from "../pages/NewsDetail";

import EPL from "../pages/EPL";
import LaLiga from "../pages/LaLiga";
import SerieA from "../pages/SerieA"
import Bundesliga from "../pages/Bundesliga"
import Ligue1 from "../pages/Ligue1"

export default function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/schedule/*" element={<Schedule />}></Route>
            
            <Route path="/newsdetail/:newsID" element={<NewsDetail />}></Route>
            <Route path="/newsdetail" element={<NewsDetail />}></Route>

            
            <Route path="/news/epl" element={<EPL />}></Route> 
            <Route path="/news/laliga" element={<LaLiga />}></Route> 
            <Route path="/news/seriea" element={<SerieA />}></Route> 
            <Route path="/news/bundesliga" element={<Bundesliga />}></Route> 
            <Route path="/news/ligue1" element={<Ligue1 />}></Route> 


            <Route path="/standings/epl" element={<EPLStandings />}></Route>
            <Route path="/standings/laliga" element={<LaLigaStandings />}></Route>
            <Route path="/standings/seriea" element={<SerieAStandings />}></Route>
            <Route path="/standings/bundesliga" element={<BundesligaStandings />}></Route>
            <Route path="/standings/ligue1" element={<Ligue1Standings />}></Route>
        </Routes>
    );
}
