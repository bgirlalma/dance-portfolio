import styled from "styled-components";

interface SwitchButtonProps {
    darkTheme: boolean;
}

export const SwitchButton = styled.button<SwitchButtonProps>`
position: absolute;
bottom: 0;
margin: 0 0 20px 20px;
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${(props) => (props.darkTheme ? "#0f084f" : "#fff")};
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
