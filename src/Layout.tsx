import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar";
import { GlobalStyled } from "./globalStyled";

import styled from "styled-components";


const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const FlexComponent = styled.div`

  @media screen and (min-width: 768px) {
    margin-left: 300px;
  }
`;
const Layout = () => {
    return (
      <>
        <Container>
          <Sidebar />
          <FlexComponent>
            <Outlet />
          </FlexComponent>
          <GlobalStyled />
        </Container>
      </>
    );
}

export default Layout;