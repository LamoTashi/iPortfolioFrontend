import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                {/* Pass setToken to update App's token state on login */}
                <Route path="/admin/login" element={<AdminLogin setToken={setToken} />} />
                <Route
                    path="/admin/dashboard"
                    element={token ? <AdminDashboard /> : <Navigate to="/admin/login" />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;