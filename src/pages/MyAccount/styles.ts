import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Manrope';
    
    .my-info {
          display: grid;
          align-items: center;
          justify-items: center;
        
     img{
          width: 85px;
          margin: 5%;
          height: 85px;
          
          border-radius: 50%;
     }
       
     h2 {
          color: #000000;
          font-size: 18px;
          letter-spacing: 0.75px;
     }
   }

   .edit-profile {
        display: grid;
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
             
             font-size: 16px;
             border-style: none;
             border-radius: 8px;
             background: #F0F0F0;
             
             &::placeholder {
                  height: 24px;
                  
                  color: #555555;
                  font-size: 16px;
                  line-height: 24px;
               }
          }
     
     .button-save {
          color: #FCFCFC;
          font-size: 20px;
          font-weight: bold;
          border-radius: 8px;
          background: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);
     }
   }
`;

