import Home from "../components/Home/home";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
};

export default HomePage;
