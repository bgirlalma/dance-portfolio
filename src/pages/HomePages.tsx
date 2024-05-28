import Home from "../components/Home/home";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 40px 20px;

  background: rgb(109, 196, 122);
  background: radial-gradient(
    circle,
    rgba(109, 196, 122, 1) 34%,
    rgba(197, 213, 147, 1) 53%,
    rgba(194, 232, 233, 1) 81%
  );
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
};

export default HomePage;
