
import React from "react";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";

interface Props {
  darkTheme: boolean,
  toggleTheme: () => void
}

const ToggleButton: React.FC<Props> = ({ darkTheme, toggleTheme }) => {
  return (
    <div>
      <button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineEmojiSad /> : <HiOutlineEmojiHappy />}
      </button>
    </div>
  );
};

export default ToggleButton;
