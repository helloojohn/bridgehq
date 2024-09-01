"use client"
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
    }
    body {

    background-color: #F5F7FA;
    }
`