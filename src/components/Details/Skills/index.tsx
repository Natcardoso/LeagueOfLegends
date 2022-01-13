import * as React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { DivContainerAbillity } from "./styles";
import {
  DivAbiliity,
  DivImg,
  DivDescription,
  ButtonDetails,
  Media,
} from "./styles";

type Props = {
  keyChampion: number;
  spells: Array<Record<string, string>>;
  id: number;
};

const Skills: React.FC<Props> = (props): JSX.Element => {
  const [t, i18n] = useTranslation("global");
  const numUrl = ("0000" + props.keyChampion).slice(-4);
  const array: Array<string> = ["Q 0", "W 1", "E 2", "R 3"];
  const [URL, setURL] = useState(
    `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${numUrl}/ability_${numUrl}_Q1.webm`
  );
  const [desc, setDesc] = useState("");

  const eventClickMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    const letter = id.split("");
    const num = letter[2];
    const description = props.spells[Number(num)].description;
    
    const url = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${numUrl}/ability_${numUrl}_${letter[0]}1.webm`;

    setURL(url);
    setDesc(description);
  };

  return (
    <DivContainerAbillity>
      <p className="txtAbilities">{t("Details.abilities")}</p>
      <DivAbiliity>
        {props.spells.map((item, index) => {
          const id = item.id;
          let letterAbilities = array[index].split("");

          return (
            <ButtonDetails
              type="button"
              id={array[index]}
              onClick={eventClickMovie}
            >
              <DivImg>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${id}.png`}
                ></img>
              </DivImg>
              <DivDescription>
                <p>{letterAbilities[0]}</p>
                <p>{props.spells[index].name}</p>
              </DivDescription>
            </ButtonDetails>
          );
        })}
      </DivAbiliity>
      <Media>
        <div>
          <ReactPlayer
            width="100%"
            height="100%"
            url={URL}
            loop
            playing
            muted
            playsInline
          />
        </div>
        <div className="containerTxt">
          <p className="txt">{desc}</p>
        </div>
      </Media>
    </DivContainerAbillity>
  );
};

export default Skills;
