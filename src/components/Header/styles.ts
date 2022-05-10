import styled from "styled-components";
import { FaSearch as FaSearchComponent } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: 3.2rem;

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

export const Search = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 22px;

  display: flex;
  align-items: center;

  border-radius: 8px;
  background: #f0f0f0;

  input {
    border: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    background: #f0f0f0;

    &::placeholder {
      padding: 12px 18px 12px 12px;

      color: #888888;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
`;

export const FaSearch = styled(FaSearchComponent)`
  padding-left: 1.2rem;

  background: none;
`;
