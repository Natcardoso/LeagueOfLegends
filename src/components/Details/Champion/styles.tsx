import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;

  background-color: var(--darkBlue);

  div {
    height: 650px;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    div {
      height: 19rem;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    div {
      height: 23rem;
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    div {
      height: 39rem;
    }
  }
`;

export const ImgBackground = styled.img`
  width: 1200px;
  height: 600px;

  @media (min-width: 0px) and (max-width: 426px) {
    width: 100%;
    height: 75%;
  }

  @media (min-width: 427px) and (max-width: 769px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    width: 100%;
    height: 90%;
  }
`;

export const DivShadow = styled.div`
  position: absolute;

  height: 2em;
  width: 100%;

  top: 580px;

  background-color: var(--darkBlue);
  box-shadow: 0 0 6em 7em var(--darkBlue);

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    text-align: center;

    margin: 0 10rem;
    width: 50%;
    left: 13rem;

    border-bottom: 0.5px solid var(--gold);
    top: -150%;

    p:nth-child(1) {
      font-size: 5em;
      font-weight: 600;
      color: var(--white);
    }

    p:nth-child(2) {
      font-size: 1.8em;
      color: var(--white);
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 100;
    }
  }

  @media (min-width: 0px) and (max-width: 426px) {
    top: 20rem;
    width: 100%;

    div {
      margin: 0 5.5rem;
      left: -1rem;
      width: 70%;

      p:nth-child(1) {
        font-size: 2.5rem;
      }

      p:nth-child(2) {
        font-size: 0.8rem;
      }
    }
  }

  @media (min-width: 427px) and (max-width: 769px) {
    top: 23rem;
    width: 48rem;

    div {
      margin: 0 5.5rem;
      left: 4rem;
      width: 60%;

      p:nth-child(1) {
        font-size: 3.5rem;
      }

      p:nth-child(2) {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    width: 100%;

    div {
      width: 60%;
      left: 4rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;

  background-color: var(--darkBlue);
  color: var(--white);

  div:nth-child(1) {
    text-align: center;
    margin: 0 13rem;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    p {
      font-size: 15px;
    }

    div:nth-child(1) {
      margin: 0 2rem;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    padding: 1.5rem;
    width: 100%;

    div:nth-child(1) {
      padding: 0 2rem;
      margin: 0;
    }

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    padding: 1.5rem 0;

    div:nth-child(1) {
      margin: 0 6rem;
    }
  }
`;

export const ImgPosition = styled.img`
  width: 2.5em;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--darkBlue);

  padding-top: 9em;
  padding-bottom: 1rem;

  @media (min-width: 0px) and (max-width: 426px) {
    height: 48rem;
    padding-top: 0;
  }

  @media (min-width: 467px) and (max-width: 769px) {
    height: 60rem;
    align-items: flex-start;
    padding: 5rem;
  }
`;
