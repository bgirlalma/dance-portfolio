import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar";
import { GlobalStyled } from "./globalStyled";

import styled from "styled-components";
import Header from "./components/Header/header";
import { useState } from "react";


const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 400px;
  }
`;

const FlexComponent = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
const Layout = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
    return (
      <Container>
        <Sidebar isMenuOpen={isMenuOpen}  menuClose={toggleMenu} />
        <FlexComponent>
          <Header menuOpen={toggleMenu} />
          <GlobalStyled />
          <Outlet />
        </FlexComponent>
      </Container>
    );
}

export default Layout;