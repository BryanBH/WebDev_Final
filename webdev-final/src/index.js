import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
const conatainer = document.getElementById("root");
const root = createRoot(conatainer);

root.render(<App tab="/" />);