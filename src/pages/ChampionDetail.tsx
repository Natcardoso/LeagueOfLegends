import ChampionDetails from "../components/Details/Champion";
import { Header } from "../components/PageList/Header/index";
import GlobalStyle from "../styles/globalDetails";

function ChampionDetail(): JSX.Element {
  return (
    <>
      <Header />
      <ChampionDetails />
      <GlobalStyle />
    </>
  );
}

export default ChampionDetail;
