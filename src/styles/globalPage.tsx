import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-image: url("http://pbs.twimg.com/media/CBH_Bm2UwAAqQaR?format=png&name=large");
    background-repeat: no-repeat;
    background-position: top;
  }

  @media (min-width: 467px) and (max-width:769px){
        body{
          background-size: cover;
        }
      }
`;
