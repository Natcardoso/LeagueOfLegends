import React, { useState, useEffect, useContext } from "react";
import {
  ButtonFilter,
  Cards,
  Container,
  ContainerCards,
  DivFilter,
} from "./styles";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import { IoMdSearch } from "react-icons/io";
import { DataContext } from "../../../context/Data";
import { useTranslation } from "react-i18next";

interface Champions {
  name: string;
  id: string;
  blurb: string;
  title: string;
  images: Array<string>;
  key: number | string;
  tags: Array<string>;
}

const ListOfChampions = () => {
  const { data } = useContext(DataContext);
  const [t, i18n] = useTranslation("global");
  const [champions, setChampions] = useState<Champions[]>([]);
  const [item, setItem] = useState<Champions[]>([]);
  const [itensPerPage, setItensPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const pt = [
    `${t("PageList.all")}`,
    `${t("PageList.fighters")}`,
    `${t("PageList.mages")}`,
    `${t("PageList.assassins")}`,
    `${t("PageList.marksmen")}`,
    `${t("PageList.tanks")}`,
    `${t("PageList.supports")}`,
  ];
  const [buttons, setButtons] = useState([
    "All",
    "Fighter",
    "Mage",
    "Assassin",
    "Marksman",
    "Tank",
    "Support",
  ]);

  const pages = Math.ceil(item.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = item.slice(startIndex, endIndex);
  const search = document.querySelector(".search");
  const input = document.querySelector<HTMLInputElement>(".input");
  const navigate = useNavigate();

  const inputFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    if (inputValue[0]) {
      const capitalize: string =
        inputValue[0].toUpperCase() + inputValue.substr(1);

      const filter = champions.filter((element) =>
        element.name.includes(capitalize)
      );
      setItem(filter);
    }
  };

  const buttonFilter = (names: string) => {
    setCurrentPage(0);
    if (names === "All") {
      setItem(champions);
      return;
    }

    const filteredResquest = champions.filter((element) =>
      element.tags.includes(names)
    );
    setItem(filteredResquest);
  };

  useEffect(() => {
    fetch(`${data}`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        const array: Champions[] = [];

        for (var i in data) {
          array.push(data[i]);
        }

        setChampions(array);
        setItem(array);
      });
  }, [data]);

  function handleClick(id: string, number: number) {
    let UrlName = id.replace(/\s/g, "");
    navigate(`/${UrlName}/${number}`);
  }

  function eventSearchBtn() {
    search?.classList.toggle("open");
    input?.focus();
  }

  return (
    <Container>
      <DivFilter>
        {buttons.map((element, index) => {
          return (
            <div key={index}>
              <ButtonFilter type="button" onClick={() => buttonFilter(element)}>
                {pt[index]}
              </ButtonFilter>
            </div>
          );
        })}
        <div className="search">
          <button className="btn" onClick={eventSearchBtn}>
            <IoMdSearch />
          </button>
          <input
            className="input"
            type="text"
            onChange={inputFilter}
            placeholder={t("PageList.search")}
          ></input>
        </div>
      </DivFilter>
      <ContainerCards>
        {currentItens?.map((element, index) => {
          let number = index + startIndex;
          let src = element.id + "_0.jpg";

          return (
            <>
              <Cards
                key={index}
                onClick={() => handleClick(element.id, number)}
              >
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${src}`}
                />
                <div>
                  <hr />
                  <p>{element.name}</p>
                </div>
              </Cards>
            </>
          );
        })}
      </ContainerCards>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default ListOfChampions;
