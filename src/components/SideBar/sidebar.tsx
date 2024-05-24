import { useState } from "react";
import Logo from "./Logo/logo";
import SidebarItems from "./SidebarItems/sidebar-items";
import ToggleButton from "./ToggleButton/toggleButton";
import { SiderMenu } from "./sidebar.styled";

const Sidebar = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    return (
      <SiderMenu darkTheme={darkTheme}>
        <Logo />
        <SidebarItems darkTheme={darkTheme} />
        <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </SiderMenu>
    );
}

export default Sidebar;