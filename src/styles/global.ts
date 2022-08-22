import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    :focus {
        outline: 0;
    }

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
}
`;
