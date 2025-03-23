import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/RootRoutes.tsx";
import { BrowserRouter } from "react-router";
import { HeroUIProvider } from "@heroui/system";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </BrowserRouter>
);
