import Home from "../components/Home/home";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 1000px) {
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
};

export default HomePage;
