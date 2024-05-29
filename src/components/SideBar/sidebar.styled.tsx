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
  background-color: ${(props) => (props.darkTheme ? "#0f084f" : "#c2e8e9")};

  @media screen and (min-width: 450px) {
    max-width: 300px;
  }
`;


export const ButtonCloseMenu = styled.button<SidebarProps>`
  position: absolute;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  botder: none;
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
    color: ${(props) => (props.darkTheme ? "#c2e8e9" : "#0f084f")};
  }
`;