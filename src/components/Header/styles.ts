import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 16rem;

  h1 {
    font-weight: 300;
    font-size: 3.8rem;
    line-height: 60px;
    font-family: "Manrope";

    display: flex;
    text-align: center;
    align-items: center;
    letter-spacing: -2.89959px;

    color: #222222;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 4px;

    color: #555555;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.75px;
  }
  span {
    color: #222222;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    letter-spacing: 1px;
  }
`;
