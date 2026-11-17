// Build: v2026.11.17-banner-refresh
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
