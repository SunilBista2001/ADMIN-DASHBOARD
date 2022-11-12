import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./comp/context/darkModeContext";
import App from "./App";
import { AuthContextProvider } from "./comp/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </DarkModeContextProvider>
);
