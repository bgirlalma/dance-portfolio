import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar";
import { GlobalStyled } from "./globalStyled";

import styled from "styled-components";
import Header from "./components/Header/header";
import { useState } from "react";

interface Props {
  darkTheme: boolean;
}

const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.darkTheme ? "#000" : "rgb(109, 196, 122)"};
  background: rgb(109, 196, 122);
  background: linear-gradient(
    14deg,
    rgba(109, 196, 122, 1) 34%,
    rgba(197, 213, 147, 1) 53%,
    rgba(194, 232, 233, 1) 81%
  );
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 400px;
  }
`;

const FlexComponent = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
const Layout = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
      setDarkTheme(!darkTheme);
    };

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
    return (
      <Container darkTheme={darkTheme}>
        <Sidebar
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          menuClose={toggleMenu}
          darkTheme={darkTheme}
        />
        <FlexComponent>
          <Header menuOpen={toggleMenu} />
          <GlobalStyled />
          <Outlet />
        </FlexComponent>
      </Container>
    );
}

export default Layout;