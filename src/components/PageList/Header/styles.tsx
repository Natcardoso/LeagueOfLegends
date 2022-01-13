import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;

  background-color: var(--darkBlue);
  border-bottom: 1px solid var(--gold);

  img:nth-child(1) {
    width: 7rem;
    margin-left: 6rem;
  }

  & > div.divPopover {
    display: flex;
    justify-content: center;
    position: relative;

    width: 1rem;
    height: 20rem;
    margin-right: 5rem;

    & > button.btnIdioma {
      background: transparent;
      border-radius: 5px;
      color: var(--white);
      cursor: pointer;
      padding: 0.3rem;
    }

    & > div.popover {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0.5rem;
      width: 9rem;
      background-color: var(--white);
      transform: translateX(50%);
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease;

      &::before {
        content: "";
        position: absolute;
        transform: translateX(50%);
        bottom: 100%;
        border-color: #fff #0000 #0000 #0000;
      }

      button:nth-child(1) {
        text-align: flex-end;
      }

      button {
        text-transform: uppercase;
        padding: 0.5rem;
        font-weight: bold;
        cursor: pointer;
        background-color: transparent;

        &:hover,
        &:focus,
        &:active {
          background: #80808037;
          color: var(--red);
        }
      }
    }

    &:hover div.popover {
      bottom: 15%;
      visibility: visible;
      opacity: 1;
    }

    &:hover div.popover button:target {
      background: #80808037;
      color: var(--red);
    }
  }
`;
