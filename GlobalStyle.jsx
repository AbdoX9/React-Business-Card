import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }

  body {  
      display: flex;
      justify-content: center;
      align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background-color: #23252C;
    box-shadow: rgba(0, 0, 0, 0.42) 0px 0px 3px 0px;
  }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
}
`;
