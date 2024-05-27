import Home from "../components/Home/home";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 40px 20px;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
};

export default HomePage;
