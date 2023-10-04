import React from 'react'
import PortfolioCard from "../portfolioCard";
import {useDarkMode} from "./useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import {ThemeProvider} from "styled-components";


const ThemedPortfolioCard = () => {
    let [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme = {themeMode}>
      <GlobalStyles />
      <PortfolioCard theme = {toggleTheme} />
    </ThemeProvider>
  )
}

export default ThemedPortfolioCard
