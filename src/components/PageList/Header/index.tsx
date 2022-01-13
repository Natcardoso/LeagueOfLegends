import { HeaderContainer } from "./styles";
import imgLogo from "./img/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/Data";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { setData } = useContext(DataContext);
  const [languages, setLanguages] = useState("pt_BR");
  const [t, i18n] = useTranslation("global");
  const divPopover = document.querySelector<HTMLDivElement>(".divPopover");

  function eventBtnIdioma() {
    divPopover?.classList.add("open");
  }

  const ulrMultiLanguages = `http://ddragon.leagueoflegends.com/cdn/11.23.1/data/${languages}/champion.json`;
  setData(ulrMultiLanguages);

  function idioma(language: string) {
    setLanguages(`${language}`);
    i18n.changeLanguage(`${language}`);
  }

  return (
    <>
      <HeaderContainer>
        <div></div>
        <Link to="/">
          <img src={imgLogo}></img>
        </Link>
        <div className="divPopover">
          <button className="btnIdioma" type="button" onClick={eventBtnIdioma}>
            <AiOutlineGlobal />
          </button>
          <div className="popover">
            <button type="button" onClick={() => idioma("pt_BR")}>
              Português(BR)
            </button>
            <button type="button" onClick={() => idioma("en_US")}>
              English(US)
            </button>
            <button type="button" onClick={() => idioma("es_MX")}>
              Spanish(MX)
            </button>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};
