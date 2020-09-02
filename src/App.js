import React from "react";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}