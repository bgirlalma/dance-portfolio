import styled from "styled-components";

interface SwitchButtonProps {
    darkTheme: boolean;
}

export const SwitchButton = styled.button<SwitchButtonProps>`
  position: absolute;
  top: 0;
  margin: 20px 0 0 20px;


  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.darkTheme ? "#fff" : "#0f084f")};
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:hover {
    border: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
