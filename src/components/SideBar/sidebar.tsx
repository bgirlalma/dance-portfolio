import React, { useEffect, useState } from "react";
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
  const [isMenuAlwaysOpen, setIsAlwaysOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAlwaysOpen(window.innerWidth >= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMenuOpen || isMenuAlwaysOpen ? (
        <SiderMenu darkTheme={darkTheme}>
          <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
          <ButtonCloseMenu darkTheme={darkTheme} onClick={menuClose}>
            <IoCloseCircleOutline />
          </ButtonCloseMenu>
          <SidebarItems darkTheme={darkTheme} />
        </SiderMenu>
      ) : null}
    </>
  );
};

export default Sidebar;
