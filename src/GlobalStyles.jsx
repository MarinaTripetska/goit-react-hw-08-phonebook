import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --button-color: rgb(68, 68, 141);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
p,
ul,
li
 {
  margin: 0;
}
body {
  min-height: 100vh;
  line-height: 1.5;
  background-color: #e6f0ef;
}
ul{
  list-style: none;
    padding: 0;
}
a {
  text-decoration-skip-ink: auto;
}
input,
button {
  font: inherit;
}


`;
export default GlobalStyle;
