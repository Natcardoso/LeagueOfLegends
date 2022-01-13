import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BackgroundContainer,
  DescriptionContainer,
  DivContainer,
  DivShadow,
  ImgBackground,
  ImgPosition,
} from "./styles";
import Skills from "../Skills";
import Skins from "../Skins";
import { DataContext } from "../../../context/Data";
import { useTranslation } from "react-i18next";

interface Champion {
  id: string;
  name: string;
  title: string;
  lore: string;
  tags: string;
  info: string;
  spells: Array<Record<string, string>>;
  skins: Array<Record<string, string>>;
  key: number;
  passive: string;
}

const ChampionDetails = () => {
  const [t, i18n] = useTranslation("global");
  const { data } = useContext(DataContext);
  const { name, id } = useParams();
  const [champion, setChampion] = useState<Champion>();

  const url = data.substr(0, 66);

  React.useEffect(() => {
    fetch(`${url}/${name}.json`)
      .then((res) => res.json())
      .then((response) => {
        const dataChampions = response.data[`${name}`];
        setChampion(dataChampions);
      });
  }, [name, data]);

  const classOfChampion = champion?.tags[0];

  return (
    <div>
      <>
        <BackgroundContainer>
          <div>
            <ImgBackground
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}
            />
          </div>
        </BackgroundContainer>
        <DivShadow>
          <div>
            <p>{champion?.name}</p>
            <p>{champion?.title}</p>
          </div>
        </DivShadow>
        <DescriptionContainer>
          <div>
            <p>{champion?.lore}</p>
          </div>
          <div>
            {champion?.tags[0] == `${classOfChampion}` ? (
              <ImgPosition
                src={require(`./imgClass/${classOfChampion}.png`).default}
              />
            ) : (
              ""
            )}
            <p>{t("Details.role")}</p>
            <p>{champion?.tags[0]}</p>
          </div>
        </DescriptionContainer>
        <DivContainer>
          {champion?.spells && champion != undefined ? (
            <Skills
              id={Number(id)}
              spells={champion?.spells}
              keyChampion={champion?.key}
              passive={champion?.passive}
            />
          ) : (
            ""
          )}
        </DivContainer>
        {champion?.skins != undefined ? (
          <Skins arraySkins={champion?.skins} id={champion.id} />
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default ChampionDetails;
