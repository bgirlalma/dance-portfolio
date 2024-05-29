import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px 40px;
`;

export const ButtonOpenMenu = styled.button`
background-color: inherit;
border: none;

&:focus{
    outline: none;
}

&:active{
    outline: none;
}

svg{
    width: 30px;
    height: 30px;
}
`;