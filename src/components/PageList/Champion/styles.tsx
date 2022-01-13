import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1em;

  @media (min-width: 0px) and (max-width: 426px) {
    background-color: var(--darkBlue);
  }
`;

export const DivFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1em 0;
  padding-right: 1.5em;

  & > div.search {
    display: flex;
    position: relative;
    
    height: 40px;
    width: 85%;
    max-width: 400px;
    
    border-radius: 3px;

    & > button.btn {
      position: relative;
      
      background: transparent;
      color: var(--white);
      outline: none;
      
      width: 50px;
      height: 40px;
      left: 0%;
      
      border: none;
      border-radius: 3px;
      
      cursor: pointer;
      
      transition: left ease 0.4s 0.4s, border-radius ease 0.5s 0.1s;
      color ease 0.2s 0.4s, transform linear 0.3s;

      &:not(.open .btn):active {
        transform: scale(0.7);
      }
    }

    & > input.input {
      height: 40px;
      width: 0px;
      
      font-weight: 500;
      font-size: 1rem;
      
      outline: none;
      transition: all ease 0.3s;
      
      border-bottom: 2px solid var(--gold);
      
      background: transparent;
      color: var(--white);

      &::-webkit-input-placeholder {
        color: var(--white);
      }
    }
  }

  & > div.search.open button.btn {
    left: 3px;
    
    border-radius: 3px 0 0 3px;
    transition: left ease 0.4s 0.2s, border-radius ease 0.4s 0.4s;
  }

  & > div.search.open input.input {
    display: inline-block;
    
    width: 86%;
    padding: 0 12px;
    
    transition: all ease 0.4s 0.5s;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    flex-wrap: wrap;
    padding: 0;

    & > div.search{
      padding: 0.5rem 0;
      width: 60%;

      &> input.input{
        &::-webkit-input-placeholder{
          font-size: 15px;
        }
      }
    }
  }

  @media (min-width: 467px) and (max-width: 769px){
    flex-wrap: wrap;
    padding: 0;
  }

  @media (min-width: 770px) and (max-width: 1025px){
    padding: 0.8rem;
  }
`;

export const ButtonFilter = styled.button`
  margin-right: 0.5em;
  width: 8em;
  padding-right: 1.5em;
  padding: 0.5em;
    
  color: var(--white);
  font-size: 0.7rem;
  text-transform: uppercase;
  background: var(--gold);

  -webkit-transition all 1s ease;
  transition all 1s ease;
  
  &:hover {
    -webkit-transition all .5s ease;
    transition all .5s ease;
    background-color: transparent;
    border-bottom: 2px solid var(--gold);
  }
  
  &:after{
    transition all .2s ease;
    width: 0;
    border-bottom: 2px solid var(--gold);
  }
  
  &:focus {
    border-bottom: 2px solid var(--gold);
    background-color: transparent;
  }

  @media (min-width: 0px) and (max-width: 426px) {
    flex-wrap: wrap;
    padding: 5%;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    width: 7em;
    font-size: 13px;
  }

  @media (min-width: 467px) and (max-width:769px){
    margin-bottom: 0.3rem;
  }

  @media (min-width: 770px) and (max-width: 1025px){
    font-size: 0.6rem;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 2em 2em;

  @media (min-width: 0px) and (max-width: 426px) {
    padding: 0.3rem;
    margin-top: 1rem;
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    padding: 1rem 1rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 1.3em;

  margin: 0.2em;

  cursor: pointer;
  overflow: hidden;
  -webkit-box-shadow: 0 0 5px var(--black);
  box-shadow: 0 0 5px var(--black);
  border: 1px solid var(--gold);

  img {
    transform: scale(1.1);

    width: 250px;
    height: 360px;
  }

  div {
    position: absolute;

    width: 249px;
    height: 359px;

    p {
      display: none;
    }

    &:hover {
      transition: all 0.5s;
      background-color: rgb(6, 28, 37, 0.4);

      p {
        display: flex;
        align-items: flex-end;

        padding-left: 1rem;
        padding-bottom: 1rem;

        color: var(--white);
        width: 100%;
        height: 17%;

        animation-name: slidein;
        animation-duration: 1s;
      }

      hr {
        background-color: var(--gold);
        border: 1px solid var(--gold);

        margin-top: 18rem;
        width: 8rem;
      }
    }
  }

  @keyframes slidein {
    from {
      margin-top: 5%;
    }

    to {
      margin-top: 0%;
    }
  }

  @media (min-width: 0px) and (max-width: 426px) {
    margin: 0.2rem;

    img {
      width: 100px;
      height: 150px;
    }

    div {
      width: 100px;
      height: 150px;
    }
  }

  @media (min-width: 467px) and (max-width: 769px) {
    margin: 0.2rem;

    img {
      width: 160px;
      height: 210px;
    }

    div {
      width: 100px;
      height: 150px;
    }
  }

  @media (min-width: 770px) and (max-width: 1025px) {
    margin: 0.2rem;

    img {
      width: 180px;
      height: 250px;
    }

    div {
      width: 100px;
      height: 150px;
    }
  }
`;
