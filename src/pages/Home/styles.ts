import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 0 1.6rem;

  main {
    max-width: 100%;
    padding-top: 32px;

    gap: 8px;
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
