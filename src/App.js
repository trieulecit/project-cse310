import React, { useEffect } from "react";
import MenuRoutes from "./routes/Routes";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ScrollButton from "./components/ScrollButton";


function App() {
    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <header className="header">
                        <Header />
                    </header>
                    <main style={{marginTop: "65px"}}>
                        <MenuRoutes />
					</main>
                    <footer>
                        <Footer />
                    </footer>
                    <ScrollButton />
                </div>
            </div>
			
        </Router>
    );
}

export default App;
