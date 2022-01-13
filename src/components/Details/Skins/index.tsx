import { DivImg, DivSkins } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.scss";
import { useTranslation } from "react-i18next";

interface Props {
  arraySkins: Array<Record<any, any>>;
  id: string;
}

const Skins = (props: Props): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <DivSkins>
      <p>{t("Details.skins")}</p>

      <Carousel className="main-slide">
        {props.arraySkins.map((item, index) => {
          const numSkin = Number(item.num);
          const name: string = props.id;

          const nameSkin: string = `${name}_${numSkin}.jpg`;

          return (
            <DivImg key={index}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameSkin}`}
              ></img>
              <div>
                {item.name === "default" ? (item.name = `${name}`) : ""}
                <span>{item.name}</span>
              </div>
            </DivImg>
          );
        })}
      </Carousel>
    </DivSkins>
  );
};

export default Skins;
