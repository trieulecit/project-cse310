import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";

import Schedule from "../pages/Schedule";
import NewsDetail from "../pages/NewsDetail";
import Standings from "../pages/Standings";

import CreateNews from "../components/CreateNews";
import NewsManager from "../pages/NewsManager";
import EditNews from "../components/EditNews";

import News from "../pages/News";

export default function MenuRoutes(props) {
    const ProtectedRoute = ({ user, children }) => {
        if (!user) {
            return <Navigate to={"/"} replace />;
        }
        return children;
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/standings/:league" element={<Standings />} />
            <Route path="/news/:league" element={<News />}></Route>
            <Route path="/news-detail/:newsID" element={<NewsDetail />} />
            <Route path="/news-manager" element={<ProtectedRoute user={props.user}><NewsManager /></ProtectedRoute>} />
            <Route path="/create-news" element={<ProtectedRoute user={props.user}><CreateNews /></ProtectedRoute>} />
            <Route path="/edit-news/:newsID" element={<ProtectedRoute user={props.user}><EditNews /></ProtectedRoute>} />
        </Routes>
    );
}
