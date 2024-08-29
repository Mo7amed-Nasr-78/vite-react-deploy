import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Steps from "./components/Steps.jsx";
import FastCards from "./components/FastCards.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/global.css";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="main">
            <Header />
            <Home />
            <AboutUs />
            <Steps />
            <FastCards />
            <Footer />
        </div>
    </StrictMode>
);
