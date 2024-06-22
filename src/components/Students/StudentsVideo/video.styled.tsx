import styled from "styled-components";

export const Title = styled.h2`
  max-width: 400px;
  font-family: var(--main-font-family);
  font-size: 18px;

  margin-bottom: 20px;
  padding: 0 20px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 700px) {
    max-width: unset;
    font-size: 22px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 28px;
  }
`;

export const Desc = styled.p`
  max-width: 400px;
  font-family: var(--main-font-family);
  font-size: 16px;

  margin-bottom: 20px;
  padding: 0 20px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 700px) {
    max-width: unset;
    font-size: 18px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 22px;
  }
`;

export const WrappContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  padding: 0 20px;

  @media screen and (min-width: 1000px) {
    width: 820px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1500px) {
    width: auto;
    display: flex;
    justify-content: unset;
    flex-wrap: wrap;
  }
`;

export const VideoList = styled.li`
    display: flex;
    justify-content: center;
`;



