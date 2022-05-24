import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Arial';
    background-color: yellow;

    .register {
        height: 100%;
        display: grid;
        flex-wrap: wrap;
        justify-items: flex-start;
        justify-content: space-around;

        p {
            font-family: 'Arial';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            margin-top: 10%;
    
            align-items: center;
            display: flex;
    
            color: #333333;
        }

        input {
            height: 56.62px;
            width: 340px;
            top: 181px;
            left: 18px;
            font-size: 16px;
            border-radius: 8px;
    
            padding-left: 5%;
            bottom: 1.1%;
    
            background: #F0F0F0;
            border-radius: 8px;
            
            &::placeholder{
                height: 24px;
        
                font-family: 'Arial';
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                
                display: flex;
                align-items: center;
                letter-spacing: 0.01em;
                
                color: #555555;
            }
        }

    }

    .button-register {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        
        height: 56px;
        left: 5.33%;
        right: 3.2%;
        top: calc(50% - 56px/2 + 353.5px);
        
        background: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);
        border-radius: 8px;
        color: #FCFCFC;

        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;

        position: fixed;
    }

    input[type="file"] {
        display: none;
    }

    label {
        font-weight: bold;
        width: 343px;
        height: 167.18px;
        padding: 5%;

        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        
        display: grid;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 25%;
        
        color: #333333;
        background: #F0F0F0;
        border-radius: 32px;

        p {
            width: 300.83px;
            height: 40px;
            
            font-family: 'Epilogue';
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;
            margin: 5%;
            
            display: flex;
            align-items: center;
            text-align: center;
            background: none;
            color: #888888;
        }

        svg {
            width: 32px;
            height: 32px;
            margin-left: 45%;
        }
    }

    

    
`;