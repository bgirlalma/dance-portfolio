import React, { useState } from "react";
import SidebarItems from "./SidebarItems/sidebar-items";
import ToggleButton from "./ToggleButton/toggleButton";
import { SiderMenu, ButtonCloseMenu } from "./sidebar.styled";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  isMenuOpen: boolean;
  menuClose: () => void;
}

const Sidebar: React.FC<Props> = ({isMenuOpen, menuClose }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      {!isMenuOpen && (<SiderMenu darkTheme={darkTheme}>
        <ButtonCloseMenu darkTheme={darkTheme} onClick={menuClose}>
          <IoCloseCircleOutline />
        </ButtonCloseMenu>
        <SidebarItems darkTheme={darkTheme} />
        <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </SiderMenu>)}</>
  );
};

export default Sidebar;
