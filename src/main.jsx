import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// leggo se sono stati salvati dei task in localStorage
let savedTasks = JSON.parse(localStorage.getItem("tasks"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App savedTasks={savedTasks} />
  </StrictMode>
);
