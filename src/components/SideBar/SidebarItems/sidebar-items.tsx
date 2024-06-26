import React, { useEffect, useState } from "react";
import { StyledMenuContainer, Items,IconContainer, StyledMenuItems } from "./sidebarItems.styled";
import { IoHomeOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { BiMessageDots } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  darkTheme: boolean;
  menuClose: () => void;
}
const SidebarItems: React.FC<Props> = ({ darkTheme, menuClose }) => {

  //got current url
  const location = useLocation();

  //use nav for change url
  const navigate = useNavigate();

  //state window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //got last path
  const storedPath = localStorage.getItem("currentPath");

  //got current path, if he don`t null or undefined install storedPath, otherwise use location.pathname
  const initialPath =
    storedPath !== null && storedPath !== undefined
      ? storedPath
      : location.pathname;

  //create state location with initialPath
  const [, setLocation] = useState(initialPath);

  //update location with new path and write localstorage
  const updatePath = (path: string) => {
    setLocation(path);
    localStorage.setItem("currentPath", path);
  };

  //if size < = 450px, shut sidebar at click nav and let`s go nav
  const handleNavigate = (path: string) => {
    if (windowWidth <= 450) {
      menuClose()
      updatePath(path);
      navigate(path);
    } else {
      updatePath(path);
      navigate(path);
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      updatePath(location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [location.pathname]);

  return (
    <StyledMenuContainer>
      <Items>
        <StyledMenuItems
          darkTheme={darkTheme}
          to="/"
          onClick={() => handleNavigate("/")}
        >
          <IoHomeOutline />
          Home
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems
          darkTheme={darkTheme}
          to="/video"
          onClick={() => handleNavigate("/video")}
        >
          <GoVideo />
          Video
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems
          darkTheme={darkTheme}
          to="/students"
          onClick={() => handleNavigate("/students")}
        >
          <PiStudent />
          Students
          <IconContainer>
            <SlArrowRight />
          </IconContainer>
        </StyledMenuItems>
      </Items>
      <Items>
        <StyledMenuItems
          darkTheme={darkTheme}
          to="/contacts"
          onClick={() => handleNavigate("/contacts")}
        >
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
