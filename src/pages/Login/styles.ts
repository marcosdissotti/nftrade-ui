import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Manrope';
    
    .app-name{
        height: 30%;
        display: flex;
        color: #222222;
        flex-wrap: wrap;
        font-size: 48px;
        margin-top: 20%;
        align-items: center;
        justify-content: center;
    }

    .buttons{
        display: grid;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .buttons > #btnLogin {
        margin: 5px;
        height: 50px;
        width: 280px;
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        border-radius: 8px;
        background: linear-gradient(#0038F5, #9F03FF);
    }

    .buttons > #btnRegister {
        margin: 5px;
        height: 50px;
        width: 280px;
        color: #222222;
        font-size: 20px;
        font-weight: bold;
        border-radius: 8px;
        border-color: linear-gradient(#0038F5, #9F03FF);
    }
`;

