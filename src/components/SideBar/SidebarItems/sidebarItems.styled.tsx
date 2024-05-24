import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  darkTheme: boolean;
}

export const StyledMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px){
    max-width: 400px;
  }
`;

export const Items = styled.li`
  border-radius: 10px;
  padding: 15px 0 15px 40px;
  transition: background-color 0.6s ease-in-out;

  &:hover {
    background-color: #e4684c;
  }
`;

export const StyledMenuItems = styled(NavLink)<Props>`
  font-family: var(--main-font-family);
  position: relative;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${(props) => (props.darkTheme ? "#0f084f" : "#fff")};

  &:hover {
    color: #fff;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  right: 0;
  margin-right: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
`;