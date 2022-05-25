import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Manrope';

    .register {
        height: 100%;
        display: grid;
        flex-wrap: wrap;
        justify-content: space-around;

        p {
            margin-top: 10%;
            
            color: #333333;
            font-size: 20px;
        }

        input {
            width: 340px;
            height: 56.62px;
            margin-top: 5%;
            padding-left: 5%;
            border-style: none;
            border-radius: 8px;
            
            font-size: 16px;
            background: #F0F0F0;
            
            &::placeholder {
                height: 24px;
                font-size: 16px;
                line-height: 24px;
                  
                color: #555555;
            }
        }

    .button-register {
        border-radius: 8px;
        
        color: #FCFCFC;
        font-size: 20px;
        font-weight: bold;
        background: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);
    }

    input[type="file"] {
        display: none;
    }
          
    label {
        width: 343px;
        display: grid;
        margin-top: 5%;
        height: 167.18px;
        align-items: center;
        align-content: center;
        
        color: #333333;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        background: #F0F0F0;
        border-radius: 32px;
    
            p {
                margin: 5%;
            
                color: #888888;
                font-size: 13px;
                background: none;
                line-height: 20px;
            }
    
            svg {
                width: 34px;
                height: 34px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }

    .label-upload-perfil {
        background-color: red;
    }
`;