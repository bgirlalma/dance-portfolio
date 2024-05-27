import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
#root {
 --main-font-family: 'Oxygen', sans-serif;

 --color-main-title: #090432;
 --color-title: #414048;
 --color-title-three: #540A6D;
 --color-span: #92789B;
 --color-desc: #3C1849;
 --color-city-title: #551010;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Oxygen', sans-serif, 'Jacquard 24', system-ui, "Sevillana", cursive;
  box-sizing: border-box;
background-color: #fff;
  
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