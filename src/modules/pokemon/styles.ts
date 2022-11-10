import styled from "styled-components";

export const Container = styled.div`
  background: black;
  padding: 3rem 0;
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  >h1 {
    font-size: 4rem;
    color: white;
    text-transform:capitalize;
    text-align: center;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1rem;
  > img {
    height: 120px;
  }
 
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  >div {
    display: flex;
    gap: 0.5rem;
    > p {
      text-transform: capitalize;
    }
  }
  > * {
    color: white;
  }
`;