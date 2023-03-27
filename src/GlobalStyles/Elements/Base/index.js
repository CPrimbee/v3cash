import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html {
    font-size: 10px;
  }
  
  body {
    background-color: var(--color-green);
    font-family: 'mago3', sans-serif;
  }
`

export default Base;