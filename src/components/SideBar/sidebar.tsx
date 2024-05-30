import React from "react";
import SidebarItems from "./SidebarItems/sidebar-items";
import ToggleButton from "./ToggleButton/toggleButton";
import { SiderMenu, ButtonCloseMenu } from "./sidebar.styled";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  isMenuOpen: boolean;
  menuClose: () => void;
  toggleTheme: () => void;
  darkTheme: boolean;
}

const Sidebar: React.FC<Props> = ({
  isMenuOpen,
  menuClose,
  toggleTheme,
  darkTheme,
}) => {

  return (
    <>
      {isMenuOpen && (
        <SiderMenu darkTheme={darkTheme}>
          <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
          <ButtonCloseMenu darkTheme={darkTheme} onClick={menuClose}>
            <IoCloseCircleOutline />
          </ButtonCloseMenu>
          <SidebarItems darkTheme={darkTheme} />
        </SiderMenu>
      )}
    </>
  );
};

export default Sidebar;
