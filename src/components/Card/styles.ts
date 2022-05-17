import styled from "styled-components";

export const Container = styled.div`
  width: 164px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 204px;
    border-radius: 16px;
  }

  .ethereum-wrapper {
    padding: 0 8px;
    width: 100%;

    display: flex;

    svg {
      height: auto;
      width: 1.4rem;
    }

    .price-wrapper {
      width: 100%;
      display: flex;
      align-items: center;

      span {
        width: 40%;
        margin-left: 4px;

        color: #222222;
        font-size: 10px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.01em;
      }

      p {
        width: 60%;

        color: #888888;
        font-size: 11px;
        font-weight: 400;
        text-align: right;
        line-height: 24px;
      }
    }
  }
`;
