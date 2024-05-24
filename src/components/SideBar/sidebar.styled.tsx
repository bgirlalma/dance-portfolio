import styled from "styled-components";

interface SidebarProps {
  darkTheme: boolean
}

export const SiderMenu = styled.nav<SidebarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.darkTheme ? "#F2EEDB" : "#0f084f")};

  @media screen and (min-width: 450px) {
    max-width: 300px;
  }
`;