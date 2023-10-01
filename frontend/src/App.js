import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import HomePage from "./components/home";
import MainPage from "./components/main";
import store from './redux/store'
import PortfolioCard from "./components/portfolioCard";

function App() {
  return (
    <Provider store={store}>
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="/main" element={<MainPage />} />
            <Route path="/portfolio" element={<PortfolioCard/>}/>
        </Routes>
      </BrowserRouter>
    </AuthState>
    </Provider>
  );
}

export default App;
