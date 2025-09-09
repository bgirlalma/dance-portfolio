
import styled from 'styled-components';

const Image = styled.h2`
  font-size: 20px;
  font-family: var(--main-font-family);
  padding: 20px;

  border: 1px solid #55ecfaff;
  border-right: none;
  border-block-start: aliceblue;
  border-radius: 50%;
  color: #0f084f;

  span {
    color: #7fccd5ff;
  }

`;
const Logo = () => {
  return (
    <div>
      <Image>
        dance <span>teacher</span>
      </Image>
    </div>
  );
};

export default Logo;
