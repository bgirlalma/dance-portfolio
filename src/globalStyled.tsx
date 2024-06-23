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
 --color-link: #EF1012;
}

#root, #app {
  width: 100%;
  height: 100%;
}

 html, body {
  margin: 0;
  font-family: 'Roboto', 'Oxygen', sans-serif, 'Jacquard 24', system-ui, "Sevillana", cursive;
   box-sizing: border-box;
}

body{
box-sizing: border-box;
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