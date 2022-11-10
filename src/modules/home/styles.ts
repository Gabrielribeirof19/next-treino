import styled from "styled-components";

export const Container = styled.div`
  background: black;
  padding: 3rem 0;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 2rem 1rem;

  > div {
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rebeccapurple;
    cursor: pointer;
    > p {
      font-weight: bold;
      text-transform: capitalize;
    }
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
      > p {
        color: white;
      }
    }
  }
`;
