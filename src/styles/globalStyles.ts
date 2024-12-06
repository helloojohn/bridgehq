"use client"
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *, *::after, *::before {
        /* padding: 0; */
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    body {
    background-color: #F5F7FA;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`