import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioCard from "./components/portfolioCard";
import AuthRedirectHandler from "./components/AuthRedirectHandler";
import AuthCheck from "./components/AuthCheck";
import store from './redux/store';
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <AuthCheck>
                  <PortfolioCard />
                </AuthCheck>
              }
            />
            <Route path="/main" element={<AuthRedirectHandler />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;