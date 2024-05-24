import React from "react";
import { StyledMenuContainer, Items,IconContainer, StyledMenuItems } from "./sidebarItems.styled";
import { IoHomeOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { BiMessageDots } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";

interface Props {
  darkTheme: boolean;
}
const SidebarItems: React.FC<Props> = ({ darkTheme }) => {
  return (
    <StyledMenuContainer>
      <Items>
        <StyledMenuItems darkTheme={darkTheme} to="/">
          <IoHomeOutline />
          Home
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems darkTheme={darkTheme} to="/video">
          <GoVideo />
          Video
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems darkTheme={darkTheme} to="/students">
          <PiStudent />
          Students
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems darkTheme={darkTheme} to="/contacts">
          <BiMessageDots />
          Contacts
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
    </StyledMenuContainer>
  );
};

export default SidebarItems;
