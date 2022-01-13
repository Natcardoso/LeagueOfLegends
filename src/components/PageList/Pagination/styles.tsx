import styled from "styled-components";

export const PaginationContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  button {
    font-weight: 800;
    background-color: var(--gold);
    color: var(--black);

    border-radius: 3px;

    padding: 0.5rem;
    margin-left: 0.5rem;
    width: 2.7rem;

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      color: var(--white);
      background-color: transparent;
      border: 2px solid var(--gold);
    }
  }

  @media (min-width: 0px) and (max-width: 426px) {
    flex-wrap: wrap;
    padding: 0.2rem;
    margin-bottom: 0;
    padding-bottom: 1rem;

    button {
      margin-bottom: 0.2rem;
      margin-left: 0.2rem;
      font-size: 13px;
    }
  }
`;
