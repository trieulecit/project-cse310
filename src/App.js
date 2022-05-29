import React, { useEffect } from "react";
import MenuRoutes from "./routes/Routes";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";


function App() {
    console.log(MenuRoutes);
    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <header className="header">
                        <Header />
                    </header>
                    <main>
                        <MenuRoutes />
					</main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
			
        </Router>
    );
}

export default App;
