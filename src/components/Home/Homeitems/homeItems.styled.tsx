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
  margin-bottom: 20px;
  @-webkit-keyframes slide-down {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slide-down 1s ease-out forwards;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: auto;

  @media screen and (min-width: 1000px) {
 width: auto;
  }
`;

export const MainTitleHomeItems = styled.h1`
  font-family: var(--main-font-family);
  color: var(--color-main-title);
  font-size: 40px;
  margin-bottom: 20px;

  @media screen and (min-width: 1000px) {
    margin-bottom: 40px;
  }
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

  border-radius: 10px;
  padding: 15px 20px;
  gap: 10px;
  background: rgb(80, 164, 54);
  background: linear-gradient(
    24deg,
    rgba(80, 164, 54, 1) 34%,
    rgba(101, 189, 242, 1) 81%
  );

  @-webkit-keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  animation: scale-up-hor-center 1s ease-in-out forwards;

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }
`;

export const ItemsListTitle = styled.h2`
  font-family: var(--main-font-family);
  color: var(--color-white);
  font-size: 24px;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const CityTitle = styled.h3`
  font-family: var(--main-font-family);
  color: var(--color-city-title);
  font-size: 18px;
`;

export const ListTitleStudio = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--main-font-family);
  color: var(--color-desc);
`;

export const ListDescStudio = styled.span`
  color: var(--color-desc);
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