import s from "./Card.module.css";
import Hagreed from "../../assets/alt_img.jpg";
import { ButtonLike } from "../../UI/ButtonLike/ButtonLike";

export const Card = ({
  id,
  name,
  gender,
  house,
  core,
  alive,
  actor,
  image,
}) => {
  const characterData = { id, name, gender, house, core, alive, actor, image };

  return (
    <div className={s.card_wr}>
      <ButtonLike className={s.btn_like} characterData={characterData} />
      <img className={s.card_img} src={image ? image : Hagreed} alt="pic" />
      <div className={s.descr_wr}>
        <h2>{name}</h2>
        <p>Actor: {actor}</p>
        <p>Gender: {gender}</p>
        <p>House: {house}</p>
        <p>Wand core: {core}</p>
        <p>Alive: {alive ? "yes" : "no"}</p>
      </div>
    </div>
  );
};
