import{p as e,N as w,G as c,u as j,a as M,r as d,j as t,h as b,O as y}from"./index-Cn_axW3S.js";const k=e.ul`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media screen and (min-width: 400px){
    max-width: 400px;
  }
`,g=e.li`
  border-radius: 10px;
  padding: 15px 0 15px 40px;
  transition: background-color 0.6s ease-in-out;

  &:hover {
    background-color: #e4684c;
  }
`,x=e(w)`
  font-family: var(--main-font-family);
  position: relative;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${n=>n.darkTheme?"#fff":"#0f084f"};

  &:hover {
    color: #fff;
  }
`,p=e.span`
  position: absolute;
  right: 0;
  margin-right: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
`;function L(n){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320 192 192m0 128 128-128"},child:[]}]})(n)}function S(n){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"},child:[]}]})(n)}function z(n){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"},child:[]},{tag:"path",attr:{d:"M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z"},child:[]}]})(n)}function B(n){return c({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"},child:[]}]})(n)}function Z(n){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"},child:[]},{tag:"circle",attr:{cx:"15",cy:"10",r:"2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"10",r:"2"},child:[]}]})(n)}function f(n){return c({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(n)}const V=({darkTheme:n,menuClose:a})=>{const i=j(),r=M(),[h,s]=d.useState(window.innerWidth),l=localStorage.getItem("currentPath"),m=l??i.pathname,[,v]=d.useState(m),C=o=>{v(o),localStorage.setItem("currentPath",o)},u=o=>{h<=450?(a(),C(o),r(o)):(C(o),r(o))};return d.useEffect(()=>{const o=()=>{C(i.pathname)};return window.addEventListener("popstate",o),window.addEventListener("resize",()=>s(window.innerWidth)),()=>{window.removeEventListener("popstate",o),window.removeEventListener("resize",()=>s(window.innerWidth))}},[i.pathname]),t.jsxs(k,{children:[t.jsx(g,{children:t.jsxs(x,{darkTheme:n,to:"/",onClick:()=>u("/"),children:[t.jsx(S,{}),"Home",t.jsx(p,{children:t.jsx(f,{})})]})}),t.jsx(g,{children:t.jsxs(x,{darkTheme:n,to:"/video",onClick:()=>u("/video"),children:[t.jsx(z,{}),"Video",t.jsx(p,{children:t.jsx(f,{})})]})}),t.jsx(g,{children:t.jsxs(x,{darkTheme:n,to:"/students",onClick:()=>u("/students"),children:[t.jsx(B,{}),"Students",t.jsx(p,{children:t.jsx(f,{})})]})}),t.jsx(g,{children:t.jsxs(x,{darkTheme:n,to:"/contacts",onClick:()=>u("/contacts"),children:[t.jsx(Z,{}),"Contacts",t.jsx(p,{children:t.jsx(f,{})})]})})]})};function O(n){return c({tag:"svg",attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.37,14.62c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.38-0.24,0.6-0.24h2.04c0.23,0,0.42,0.08,0.58,0.25
	c0.15,0.17,0.23,0.37,0.23,0.61S8,15.06,7.85,15.23c-0.15,0.17-0.35,0.25-0.58,0.25H5.23c-0.23,0-0.43-0.08-0.6-0.25
	C4.46,15.06,4.37,14.86,4.37,14.62z M7.23,21.55c0-0.23,0.08-0.43,0.23-0.61l1.47-1.43c0.15-0.16,0.35-0.23,0.59-0.23
	c0.24,0,0.44,0.08,0.6,0.23s0.24,0.34,0.24,0.57c0,0.24-0.08,0.46-0.24,0.64L8.7,22.14c-0.41,0.32-0.82,0.32-1.23,0
	C7.31,21.98,7.23,21.78,7.23,21.55z M7.23,7.71c0-0.23,0.08-0.43,0.23-0.61C7.66,6.93,7.87,6.85,8.1,6.85
	c0.22,0,0.42,0.08,0.59,0.24l1.43,1.47c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6s-0.36,0.24-0.6,0.24
	c-0.24,0-0.44-0.08-0.59-0.24L7.47,8.32C7.31,8.16,7.23,7.95,7.23,7.71z M9.78,14.62c0-0.93,0.23-1.8,0.7-2.6s1.1-1.44,1.91-1.91
	s1.67-0.7,2.6-0.7c0.7,0,1.37,0.14,2.02,0.42c0.64,0.28,1.2,0.65,1.66,1.12c0.47,0.47,0.84,1.02,1.11,1.66
	c0.27,0.64,0.41,1.32,0.41,2.02c0,0.94-0.23,1.81-0.7,2.61c-0.47,0.8-1.1,1.43-1.9,1.9c-0.8,0.47-1.67,0.7-2.61,0.7
	s-1.81-0.23-2.61-0.7c-0.8-0.47-1.43-1.1-1.9-1.9C10.02,16.43,9.78,15.56,9.78,14.62z M11.48,14.62c0,0.98,0.34,1.81,1.03,2.5
	c0.68,0.69,1.51,1.04,2.49,1.04s1.81-0.35,2.5-1.04s1.04-1.52,1.04-2.5c0-0.96-0.35-1.78-1.04-2.47c-0.69-0.68-1.52-1.02-2.5-1.02
	c-0.97,0-1.8,0.34-2.48,1.02C11.82,12.84,11.48,13.66,11.48,14.62z M14.14,22.4c0-0.24,0.08-0.44,0.25-0.6s0.37-0.24,0.6-0.24
	c0.24,0,0.45,0.08,0.61,0.24s0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
	s-0.44-0.08-0.6-0.25c-0.17-0.17-0.25-0.38-0.25-0.62V22.4z M14.14,6.9V4.86c0-0.23,0.08-0.43,0.25-0.6C14.56,4.09,14.76,4,15,4
	s0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6V6.9c0,0.23-0.08,0.42-0.25,0.58S15.23,7.71,15,7.71s-0.44-0.08-0.6-0.23
	S14.14,7.13,14.14,6.9z M19.66,20.08c0-0.23,0.08-0.42,0.23-0.56c0.15-0.16,0.34-0.23,0.56-0.23c0.24,0,0.44,0.08,0.6,0.23
	l1.46,1.43c0.16,0.17,0.24,0.38,0.24,0.61c0,0.23-0.08,0.43-0.24,0.59c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.42
	C19.74,20.55,19.66,20.34,19.66,20.08z M19.66,9.16c0-0.25,0.08-0.45,0.23-0.59l1.42-1.47c0.17-0.16,0.37-0.24,0.59-0.24
	c0.24,0,0.44,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6c0,0.25-0.08,0.46-0.24,0.62l-1.46,1.43c-0.18,0.16-0.38,0.24-0.6,0.24
	c-0.23,0-0.41-0.08-0.56-0.24S19.66,9.4,19.66,9.16z M21.92,14.62c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.35-0.24,0.57-0.24h2.02
	c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6s-0.09,0.43-0.26,0.6c-0.17,0.17-0.37,0.25-0.6,0.25h-2.02
	c-0.23,0-0.43-0.08-0.58-0.25S21.92,14.86,21.92,14.62z`},child:[]}]})(n)}function W(n){return c({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#673AB7",points:"16.5,18 0,42 33,42"},child:[]},{tag:"polygon",attr:{fill:"#9575CD",points:"33.6,24 19.2,42 48,42"},child:[]},{tag:"path",attr:{fill:"#40C4FF",d:"M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"},child:[]}]})(n)}const E=e.button`
  position: absolute;
  top: 0;
  margin: 20px 0 0 20px;


  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  background-color: ${n=>n.darkTheme?"#fff":"#0f084f"};
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:hover {
    border: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,I=({darkTheme:n,toggleTheme:a})=>t.jsx("div",{children:t.jsx(E,{darkTheme:n,onClick:a,children:n?t.jsx(O,{}):t.jsx(W,{})})}),A=e.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${n=>n.darkTheme?"#0f084f":"#c2e8e9"};
  z-index: 999;

  @media screen and (min-width: 450px) {
    max-width: 300px;
  }
`,H=e.button`
  position: absolute;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  border: none;
  
  padding: 0;
  background-color: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
  svg {
    width: 25px;
    height: 25px;
    color: ${n=>n.darkTheme?"#c2e8e9":"#0f084f"};
  }

  @media screen and (min-width: 1200px){
    display: none;
  }
`,F=({isMenuOpen:n,menuClose:a,toggleTheme:i,darkTheme:r})=>{const[h,s]=d.useState(!1);return d.useEffect(()=>{const l=()=>{s(window.innerWidth>=1200)};return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),t.jsx(t.Fragment,{children:n||h?t.jsxs(A,{darkTheme:r,children:[t.jsx(I,{darkTheme:r,toggleTheme:i}),t.jsx(H,{darkTheme:r,onClick:a,children:t.jsx(L,{})}),t.jsx(V,{darkTheme:r,menuClose:a})]}):null})},N=b`
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

`,P=()=>t.jsx("div",{children:t.jsx("h2",{children:"Logo"})});function D(n){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z",fill:"currentColor"},child:[]}]})(n)}const G=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 40px;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`,$=e.button`
  background-color: inherit;
  border: none;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`,R=({menuOpen:n})=>t.jsxs(G,{children:[t.jsx($,{onClick:n,children:t.jsx(D,{})}),t.jsx(P,{})]}),T=e.div`
  background: ${n=>n.darkTheme?"#454198":`linear-gradient(
    14deg,
    rgba(109, 196, 122, 1) 34%,
    rgba(197, 213, 147, 1) 53%,
    rgba(194, 232, 233, 1) 81%
  )`};

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 300px;
  }
`,q=e.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`,_=()=>{const[n,a]=d.useState(!1),[i,r]=d.useState(!0),h=()=>{r(!i)},s=()=>{a(!n)};return t.jsxs(T,{darkTheme:i,children:[t.jsx(F,{toggleTheme:h,isMenuOpen:n,menuClose:s,darkTheme:i}),t.jsxs(q,{children:[t.jsx(R,{menuOpen:s}),t.jsx(N,{}),t.jsx(y,{context:{darkTheme:i}})]})]})};export{_ as default};
