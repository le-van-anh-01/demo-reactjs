import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:baseline;
    background-color: #efefef;

`;

export const LogoText = styled.div`
    flex-grow: 1;
`;

export const Menu = styled.div`
    margin-right: 50px;
    a{
        margin: 0;
        padding: 10px 10px;
        font-size: 1.2rem;
        text-decoration: none;
        color: black;
        height: 100%;
    }
    .active {
        background-color: aqua;
    }
`;