import React from 'react';
import { useNavigate } from 'react-router-dom'
import CreateNews from "../components/CreateNews";

export default function NewsManager() {
    const navigate = useNavigate();
    const navigateToCreateNews = () => {
        // 👇️ navigate to /contacts
        navigate('/create-news');
      };
    return (
        <button onClick={navigateToCreateNews}>Create News</button>
    )
}