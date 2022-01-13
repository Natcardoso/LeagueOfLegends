import styled from "styled-components";

export const DivContainerAbillity = styled.div`
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 4rem;
  width: 80%;
  background-color: var(--darkBlue);
  border: 0.5px solid #434242;

  & > p.txtAbilities {
    position: absolute;
    color: var(--white);
    top: -4.5rem;
    background-color: var(--darkBlue);
    padding: 0.9rem;
    left: 0.7rem;
    font-size: 5rem;
    font-weight: bold;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    flex-direction: column;
    padding: 3rem 0;
    width: 100%;
    border: none;
    border-top: 0.5px solid #434242;
    justify-content: flex-start;

    & > p.txtAbilities {
      top: -3rem;
      font-size: 3rem;
      left: 4rem;
      padding-bottom: 0;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 4rem 0;
    height: 26rem;

    & > p.txtAbilities {
      top: -3.5rem;
      font-size: 3.5rem;
      left: 1rem;
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    width: 85%;
  }
`;

export const DivAbiliity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;

  @media (min-width: 0px) and (max-width: 426px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 467px) and (max-width: 769px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ButtonDetails = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 400px;
  margin: 5px 5px;
  padding: 10px 10px;

  color: var(--white);
  background-color: transparent;
  border: 1px solid var(--gold);
  border-radius: 3px;

  transition: 0.5s ease;

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 5px 5px 10px var(--gold);
    transform: scale(0.9, 0.9);
  }

  p {
    font-weight: 600;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    width: 190px;
    margin: 0.2rem 0.5rem;
  }

  @media (min-width: 467px) and (max-width: 769px) {
    width: 200px;
    margin: 0.1rem 0.5rem;
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    width: 250px;
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  left: -10%;

  img {
    width: 3.5em;

    border-radius: 50%;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 0px) and (max-width: 426px) {
    left: -15%;

    img {
      width: 2rem;
    }
  }
`;

export const DivDescription = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  p:nth-child(1) {
    font-weight: 100;
    font-size: 0.7em;
  }

  p:nth-child(2) {
    font-weight: 300;
    font-size: 1.3em;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    p:nth-child(1) {
      font-size: 0.5rem;
    }

    p:nth-child(2) {
      font-size: 0.8rem;
    }
  }
`;

export const Media = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 60%;
  height: 90%;

  div:nth-child(1) {
    display: block;
    width: 100%;
    height: 350px;
  }

  div.containerTxt {
    height: 125px;
    width: 650px;

    p {
      color: var(--white);
      margin-top: 1rem;
      text-align: center;
      font-size: 17px;
    }
  }

  @media (min-width: 0px) and (max-width: 426px) {
    width: 90%;
    height: 14rem;
    padding: 0.5rem 0;

    div:nth-child(2) {
      height: 100px;
      width: 20rem;

      p {
        margin-top: 0;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    width: 100%;
    height: 14rem;
    padding: 0.5rem 0;
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    width: 55%;

    div.containerTxt {
      width: 30rem;

      p {
        margin-top: 0;
      }
    }
  }
`;
