import s from "./ButtonShowLiked.module.css";
import heart from "../../assets/icons/heart_liked.svg";
import { Link } from "react-router-dom";

export const ButtonShowLiked = ({ path }) => {
  return (
    <Link to={path}>
      <button className={s.btn_show_liked}>
        <img className={s.btn_heart} src={heart} alt="" />
        <p className={s.btn_descr}>Show Liked</p>
      </button>
    </Link>
  );
};
