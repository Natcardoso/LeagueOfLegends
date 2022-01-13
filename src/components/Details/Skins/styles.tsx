import styled from "styled-components";

export const DivSkins = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: var(--darkBlue);
  padding: 1rem 0;

  p:nth-child(1) {
    text-align: center;
    font-size: 5em;
    font-weight: 600;

    margin-bottom: 0.2em;
    margin-top: 0.2em;
    width: 35%;

    color: var(--white);
    border-bottom: 0.5px solid var(--gold);
  }

  @media (min-width: 0px) and (max-width: 426px) {
    flex-direction: column;
    padding-bottom: 1rem;

    p:nth-child(1) {
      width: 100%;
      font-size: 3rem;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    flex-direction: column;
    padding-bottom: 1rem;

    p:nth-child(1) {
      width: 50%;
      font-size: 3.5rem;
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    p:nth-child(1) {
      font-size: 4rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    bottom: 0em;
    padding: 0.2em;
    width: 100%;
    box-shadow: inset 0 0 2em var(--black);
    font-size: 2em;
  }

  span {
    color: var(--white);
  }

  @media (min-width: 0px) and (max-width: 426px) {
    div {
      font-size: 18px;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    div {
      font-size: 1rem;
    }
  }
`;
