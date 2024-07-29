import s from "./Layout.module.css";

import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Main } from "../components/Main/Main";
import { useMatch, useNavigate } from "react-router-dom";
import { init } from "../helpers/patronusEffect";

export default function Layout({ children }) {
  const match = useMatch("favourite");
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  init();
  return (
    <>
      <div className={s.content}>
        {match && (
          <p onClick={goToHome} className={s.back_to_all}>
            Back To All
          </p>
        )}
        <Header />
        {!match && <SearchBar />}
        <Main>{children}</Main>
      </div>
    </>
  );
}
