import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "./header.css"

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

const Header = () => {
  const [currentTech, setCurrentTech] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * technologies.length);
    setCurrentTech(technologies[randomIndex]);
  }, []);

  return (
    <div className="container">
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>🫡 Salom 💻 Frontendga qiziqasizmi?</h2>
        <p>
          {currentTech} darslariga hush kelibsiz!!! <br />
          Siz kursimizda {currentTech === "JavaScript" ? "JS" : currentTech} ni
          o'rganasiz
        </p>
        <span>Frontend uchun asosiy texnologiyalar</span>
      </div>
    </div>
  );
};

export default Header;
