import s from "./Main.module.css";

export const Main = ({ children }) => {
  return (
    <main id="main">
      <div className={s.hr}></div>
      <div className={s.card_wr}>{children}</div>
    </main>
  );
};
