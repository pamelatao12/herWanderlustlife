import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ProtectedRoute from "./common/components/ProtectedRoute";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import { AuthenticationContextProvider } from "./common/authentication/context-provider";
// import { ThemeInitializer } from "./themeInitializer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
