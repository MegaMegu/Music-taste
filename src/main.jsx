// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import "./index.css";
import Spotify from "./Spotify";
import SpotifyCallback from "./SpotifyCallback";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="spotify">
          <Route index element={<Spotify />} />
          <Route path="callback" element={<SpotifyCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
