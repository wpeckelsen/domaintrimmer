import './App.css';
import Trimmer from "./Pages/Trimmer/Trimmer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { redirect } from "react-router-dom";
import React from 'react';
import { Navigate } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import Contact from "./Pages/Contact/Contact";
import NavBar from "./Pages/Layout/NavBar";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Trimmer/>} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />

                </Route>
            </Routes>


        </BrowserRouter>


    );
}


