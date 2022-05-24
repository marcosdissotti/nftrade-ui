import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Arial';
    
    .my-info {
        display: grid;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        max-height: 100%;
   }

    .my-info > img{
        width: 85px;
        height: 85px;
        margin: 10px;
        border-radius: 50%;
   }

   .my-info > h2 {
        width: 147px;
        height: 28px;
        left: 114px;
        top: 211px;
       
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
       
        letter-spacing: 0.75px;
       
        color: #000000;
   }

   .edit-profile {
        display: grid;
        flex-wrap: wrap;
        justify-items: flex-start;
        justify-content: space-around;

        background-color: rebeccapurple;
   }

   .edit-profile > p {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 10%;

        align-items: center;
        display: flex;

        color: #333333;
   }

   .edit-profile > input {
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
   }

   input::placeholder{
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

   .edit-profile > #btnSaveEdit {
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
`;

