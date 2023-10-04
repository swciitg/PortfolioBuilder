import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import HomePage from "./components/home";
import MainPage from "./components/main";
import store from "./redux/store";
import ThemedPortfolioCard from "./components/styles/themedPortfolioCard";

function App() {
  return (
    <Provider store={store}>
      <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/portfolio" element={<ThemedPortfolioCard />} /> /* new
            themed component whose child is PortfolioCard */
          </Routes>
        </BrowserRouter>
      </AuthState>
    </Provider>
  );
}

export default App;
