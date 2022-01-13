import Champion from "../components/PageList/Champion/index";
import { Header } from "../components/PageList/Header/index";
import GlobalStyle from "../styles/globalPage";

function ListChampion(): JSX.Element {
  return (
    <>
      <Header />
      <Champion />
      <GlobalStyle />
    </>
  );
}

export default ListChampion;
