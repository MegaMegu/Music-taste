// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import "./index.css";
import SpotifyCallback from "./SpotifyCallback";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        {/* Top-level callback route so redirect URIs that point to /callback work */}
        <Route path="callback" element={<SpotifyCallback />} />
        <Route path="spotify">
          <Route path="callback" element={<SpotifyCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
