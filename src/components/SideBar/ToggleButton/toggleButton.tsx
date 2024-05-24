
import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { FcNightLandscape } from "react-icons/fc";
import { SwitchButton, } from "./toggleButton.styled";
interface Props {
  darkTheme: boolean,
  toggleTheme: () => void
}

const ToggleButton: React.FC<Props> = ({ darkTheme, toggleTheme }) => {
  return (
    <div>
      <SwitchButton darkTheme={darkTheme} onClick={toggleTheme}>
        {darkTheme ? <WiDaySunny /> : <FcNightLandscape />}
      </SwitchButton>
    </div>
  );
};

export default ToggleButton;
