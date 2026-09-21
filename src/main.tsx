import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// The portfolio is a static SPA and must never be served from stale caches.
// If a previous project on this origin registered a service worker, drop it.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((r) => r.unregister()))
    .catch(() => {})
}
if (typeof window !== "undefined" && window.caches) {
  window.caches
    .keys()
    .then((keys) => keys.forEach((key) => window.caches.delete(key)))
    .catch(() => {})
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
