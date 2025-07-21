import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext.jsx";
import { UserContext, UserProvider } from "./userContext.jsx";

createRoot(document.getElementById("root")).render(
 <HashRouter>
  <CartProvider>
      <StrictMode>
        <UserProvider>
          <App />
        </UserProvider>
      </StrictMode>
    </CartProvider>
 </HashRouter>
);
