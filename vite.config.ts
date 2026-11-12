import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readServerConfig } from "./server/config.mjs";
import { contactApp } from "./server/contact.mjs";

const contactEnquiries: Plugin = {
  name: "contact-enquiries",
  configureServer: server => () => { server.middlewares.use("/api/contact", contactApp); },
  configurePreviewServer: server => () => { server.middlewares.use("/api/contact", contactApp); },
};

export default defineConfig(({ command, mode }) => {
  const listener = command === "serve" ? { ...readServerConfig(), strictPort: true } : undefined;
  return {
    server: listener && {
      ...listener,
      fs: { deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "**/.data/**"] },
    },
    preview: listener,
    plugins: [react(), mode === "development" && componentTagger(), contactEnquiries].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime"],
    },
  };
});
