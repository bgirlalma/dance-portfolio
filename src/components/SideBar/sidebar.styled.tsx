import styled from "styled-components";

interface SidebarProps {
  darkTheme: boolean
}

export const SiderMenu = styled.nav<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.darkTheme ? "#0f084f" : "#F2EEDB")};

  @media screen and (min-width: 450px) {
    max-width: 300px;
  }
`;

export const SideLogoContainer = styled.div`
display: flex;
align-items: center;
padding: 40px 0 0 10px;
  svg {
    width: 28px;
    height: 28px;
  }
`;