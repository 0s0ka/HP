import s from "./ButtonLike.module.css";
import heartEmpty from "../../assets/icons/heart_empty.svg";
import heartFilled from "../../assets/icons/heart_filled.svg";
import clsx from "clsx";
import { useContext, useState } from "react";
import { FavouritesContext } from "../../provider/FavouritesProvider";

export const ButtonLike = ({ className, characterData }) => {
  const [favourite, setIsFavourite] = useState(false);
  const { addFavourites, removeFavourites, favouritesValue } =
    useContext(FavouritesContext);
  console.log(favouritesValue);

  const hendleFavourites = () => {
    setIsFavourite(!favourite);
    if (favourite) {
      removeFavourites(characterData.id);
    } else {
      addFavourites(characterData);
    }
  };
  console.log(characterData.id);
  return (
    <>
      <button
        onClick={hendleFavourites}
        className={clsx(s.btn_like, className)}
      >
        <img
          className={s.btn_img}
          src={favourite ? heartFilled : heartEmpty}
          alt="btn"
        />
      </button>
    </>
  );
};
