import styled from "styled-components";

export const WrappContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1200px) and (max-width: 1359px) {
    display: flex;
    justify-content: center;
  }
`;

export const NoneContainer = styled.div`
width: 100%;
height: 100vh;
`;