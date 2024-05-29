import Logo from "./Logo/logo";
import { CgMenuGridO } from "react-icons/cg";
import { HeaderContainer, ButtonOpenMenu } from "./header.styled";
import React from "react";

interface Props {
    menuOpen: () => void;
}

const Header: React.FC<Props> = ({ menuOpen }) => {
  return (
    <HeaderContainer>
      <ButtonOpenMenu onClick={menuOpen}>
        <CgMenuGridO />
      </ButtonOpenMenu>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
