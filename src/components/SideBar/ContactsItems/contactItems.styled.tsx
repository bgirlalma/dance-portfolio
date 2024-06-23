import styled from "styled-components";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  //встановлюємо глибину між користувачем та поворотом картки
  perspective: 1000px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const ContactItem = styled.li`
  width: 200px;
  height: 120px;
  border-radius: 20px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: transform 3s;
  transform-style: preserve-3d;

  background: rgb(222, 226, 223);
  background: linear-gradient(
    346deg,
    rgba(222, 226, 223, 1) 32%,
    rgba(38, 50, 161, 1) 53%,
    rgba(222, 226, 223, 1) 73%
  );

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: rotateY(180deg);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  backface-visibility: hidden;
 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;

export const ContactLink = styled.a`
  backface-visibility: hidden;
  transform: rotateY(180deg);

  font-family: var(--main-font-family);
  font-size: 28px;
  color: var(--color-link);
  transition: color 1s;

  &:hover {
    color: #1b10ef;
  }
`;
