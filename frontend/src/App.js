import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioCard from "./components/portfolioCard";
import store from './redux/store';
import DropdownCard from "./components/Dropdown";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DropdownCard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;