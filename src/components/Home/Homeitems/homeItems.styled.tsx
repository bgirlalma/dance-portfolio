import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: stretch;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 350px 1fr;
    align-items: flex-start;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const MainTitleHomeItems = styled.h1`
font-family: var( --main-font-family);
  color: var(--color-main-title);
  font-size: 40px;
`;

export const MainListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #090432;
  border-radius: 10px;
  padding: 15px 20px;
  gap: 10px;

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }
`;

export const ItemsListTitle = styled.h2`
  font-family: var(--main-font-family);
  color: var(--color-title);
  font-size: 24px;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const CityTitle = styled.h3`
  font-family: var(--main-font-family);
  color: var(--color-city-title);
  font-size: 18px;
  text-decoration: underline;
`;

export const ListTitleStudio = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--main-font-family);
  color: var(--color-desc);
`;

export const ListDescStudio = styled.span`
  color: var(--color-span);
  font-size: 12px;
  text-decoration: underline;
`;
export const ItemsListDesc = styled.p`
  display: flex;
  align-items: center;
  color: var(--color-desc);
`;

export const ItemsStudio = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;