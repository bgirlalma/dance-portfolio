import styled from "styled-components";

export const Title = styled.h2`
  font-family: var(--main-font-family);
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-family: var(--main-font-family);
  font-size: 22px;
  margin-bottom: 20px;
`;

export const WrappContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1030px){
  justify-content: center;
  }

  @media screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
  }
`;



