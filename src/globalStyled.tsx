import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
#root {
 --main-font-family: 'Oxygen', sans-serif;

 --color-main-title: #090432;
 --color-title: #414048;
 --color-title-three: #540A6D;
 --color-desc: #3C1849;
 --color-white: #fff;
 --color-black: #000;
 --color-city-title: #551010;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 body {
    width: 100%;
    height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Oxygen', sans-serif, 'Jacquard 24', system-ui, "Sevillana", cursive;
  background: rgb(109, 196, 122);
  background: radial-gradient(
    circle,
    rgba(109, 196, 122, 1) 34%,
    rgba(197, 213, 147, 1) 53%,
    rgba(194, 232, 233, 1) 81%
  );
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1, h2, h3, h4, h5, h6{
  padding: 0;
  margin: 0;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

p{
  padding: 0;
  margin: 0;
}

button{
  padding: 0;
  border: none;
}

`;