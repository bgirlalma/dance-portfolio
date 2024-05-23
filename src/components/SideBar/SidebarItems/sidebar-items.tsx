import { MenuItem } from "react-pro-sidebar";
import React from "react";
import { StyledMenu } from "./sidebarItems.styled";
import { NavLink } from "react-router-dom";

interface Props {
  darkTheme: boolean;
}
const SidebarItems: React.FC<Props> = () => {
  return (
    <StyledMenu>
      <MenuItem component={<NavLink to="/home" />}>Home</MenuItem>
      <MenuItem component={<NavLink to="/video" />}>Video</MenuItem>
      <MenuItem component={<NavLink to="/students" />}>Students</MenuItem>
      <MenuItem component={<NavLink to="/contacts" />}>Contacts</MenuItem>
    </StyledMenu>
  );
};

export default SidebarItems;
