import { useState } from "react";
import Logo from "./Logo/logo";
import SidebarItems from "./SidebarItems/sidebar-items";
import ToggleButton from "./ToggleButton/toggleButton";
import { SiderMenu, SideLogoContainer } from "./sidebar.styled";
import { AiFillAppstore } from "react-icons/ai";

const Sidebar = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    return (
      <SiderMenu darkTheme={darkTheme}>
        <SideLogoContainer>
          <AiFillAppstore />
          <Logo />
        </SideLogoContainer>
        <SidebarItems darkTheme={darkTheme} />
        <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </SiderMenu>
    );
}

export default Sidebar;