import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Manrope';
   
    
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
       font-size: 20px;
       font-weight: bold;
       background: none;
       margin-bottom: 10px;
   }

   .edit-profile {
       display: grid;
       flex-wrap: wrap;
       justify-items: flex-start;
       justify-content: space-around;
   }

   .edit-profile > p {
       font-size: 18px;
       margin: 5px;
       background: none;
   }

   .edit-profile > input {
       width: 340px; 
       line-height: 30px;
       margin: 5px;
       font-size: 16px;
   }

   .edit-profile > #btnSaveEdit {
        margin: 5px;
        height: 50px;
        width: 280px;
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        border-radius: 8px;
        margin: 10%;
        background: linear-gradient(#0038F5, #9F03FF);
   }
`;

