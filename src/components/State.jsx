import React, { useState } from "react";
import Data from "./stateDatas";
import "./State.css"

const State = () => {
  const [activeTab, setActiveTab] = useState("HTML_Elements");

  const renderContent = () => {
    const currentData = Data[activeTab][0];
    return (
      <div className="contents">
        <h4>{currentData.title}</h4>
        <p>{currentData.p}</p>
        <pre>
          <code>{currentData.code}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="container">
      <h3>Misollar</h3>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "HTML_Elements" ? "active" : ""}`}
          onClick={() => setActiveTab("HTML_Elements")}
        >
          HTML Elements
        </button>
        <button
          className={`tab ${activeTab === "Css_styles" ? "active" : ""}`}
          onClick={() => setActiveTab("Css_styles")}
        >
          CSS Styles
        </button>
        <button
          className={`tab ${activeTab === "Js_variable" ? "active" : ""}`}
          onClick={() => setActiveTab("Js_variable")}
        >
          JS O'zgaruvchilar
        </button>
        <button
          className={`tab ${activeTab === "Js_function" ? "active" : ""}`}
          onClick={() => setActiveTab("Js_function")}
        >
          JS Funksiyalar
        </button>
        <button
          className={`tab ${activeTab === "Ts_Code" ? "active" : ""}`}
          onClick={() => setActiveTab("Ts_Code")}
        >
          TypeScript
        </button>
        <button
          className={`tab ${activeTab === "React_Components" ? "active" : ""}`}
          onClick={() => setActiveTab("React_Components")}
        >
          React Components
        </button>
      </div>

      <div className="data-container">{renderContent()}</div>
    </div>
  );
};

export default State;


