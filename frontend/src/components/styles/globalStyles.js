import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    .navbar {
        navbar: ${({ theme }) => theme.navbar}
    }
    .form-control {
        background: ${({ theme }) => theme.formInputBackground};
        color: ${({ theme }) => theme.formText};
        transition: all .5s linear;
        border-color: ${({ theme }) => theme.formBorderColor};
        outline-color: ${({ theme }) => theme.formBorderOutline};
    }
    .form-group {
        background: ${({ theme }) => theme.formBackground};
    }
    .border {
        transition: all .5s linear;
        border-color: ${({ theme }) => theme.formBorderColor};
    }
    .card {
        background: ${({ theme }) => theme.cardBackground};
        color: ${({ theme }) => theme.cardText};
        border-radius: 1mm;
        border-color: ${({ theme }) => theme.cardBorderOutline};
        border-width: 0.75mm;
        margin: 2mm
    }
    .date {
        Background: ${({ theme }) => theme.dateBackground};
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(${({ theme }) => theme.dataIcon});
    }

    .Code {
        color: ${({ theme }) => theme.codeColor};
    }

`;

export const lightTheme = {
    body: "#fff",
    text: "#121212",
    dataIcon: 0,
    navbar: "light",
};

export const darkTheme = {
    navbar: "light",
    body: "#000000",
    text: "#fff",
    formText: "#fff",
    formBorderColor: "gray",
    formInputBackground: "#272727",
    formBorderOutline: "teal",
    formBackground: "#11223330",
    cardBackground: "#edf492",
    cardText: "black",
    cardBorderOutline: "teal",
    dateBackground: "transparent",
    dateIcon: 1,
    codeColor: "white",
};
