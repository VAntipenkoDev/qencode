import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/index.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    font-size: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: none;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: TrajanBold, serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
