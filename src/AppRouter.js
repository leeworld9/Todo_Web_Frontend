import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SignUp from "./SignUp";

function Copyright() { 
    return (
        <Typography variant="body2" color="textSecondary" align="center"> 
        {"Copyright © "}
        fsoftwareengineer, {new Date().getFullYear()}
        {"."}
        </Typography> 
    );
}

class AppRouter extends React.Component { 
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<App />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes> 
                    </div>
                    <Box mt={5}> 
                        <Copyright />
                    </Box>
                </BrowserRouter>
            </div> 
        );
    } 
}

export default AppRouter;