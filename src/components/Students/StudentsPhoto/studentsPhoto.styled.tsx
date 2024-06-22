import styled from "styled-components";

export const WrappContainer = styled.ul`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1000px) {
    width: 820px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1448px) {
    width: auto;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StudentsList = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 700px) {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  height: 200px;
  border-radius: 20px;

  @media screen and (min-width: 700px) {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 1000px) {
    width: 400px;
    height: auto;
  }

  @media screen and (min-width: 1000px) {
    width: 400px;
    height: auto;
  }

  @media screen and (min-width: 1448px) {
    width: 350px;
  }
`;