import React, { useState } from "react";
import MenuRoutes from "./routes/Routes";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
    // const [user, setUser] = useState(false);
    // const handleLogIn = () => {setUser(true)};
    // const handleLogOut = () => {setUser(false)};

    // function HandleUser() {
    //     const handleLogIn = () => setUser({ id: "1", name: "admin" });
    //     const handleLogOut = () => setUser(null);
    //     return user ? (
    //         <Button onClick={handleLogIn}>Log In</Button>
    //     ) : (
    //         <Button onClick={handleLogOut}>Log Out</Button>
    //     );
    // }

    const [user, setUser] = useState(false);
    const logIn = () => {
        setUser(true);
    };
    const logOut = () => {
        setUser(false);
    };
    
    function handleUser() {
        if(user) {
            return <div>
                <Button style={{marginRight: "20px"}} onClick={logOut}>Log Out</Button> 
            </div>                
        } else { 
            return <Button style={{marginRight: "20px"}} onClick={logIn}>Log In</Button>
        }
    }

    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <header className="header">
                        <Header handleUser={handleUser} user={user}/>
                        
                    </header>
                    
                    <main style={{ marginTop: "65px" }}>
                        <MenuRoutes user={user}/>
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
