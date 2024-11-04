import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Controlled from "./lezione/Controlled.jsx";
import Uncontrolled from "./lezione/Uncontrolled.jsx";
import Effect from "./lezione/Effect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Controlled /> */}
    {/* <Uncontrolled /> */}
    <Effect />
    {/* <App /> */}
  </StrictMode>
);
