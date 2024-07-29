import { useLocation } from "react-router-dom";
import { Container } from "../../Layout/Container/Container";
import s from "./Header.module.css";
import clsx from "clsx";

export const Header = () => {
  const { pathname: page } = useLocation();
  return (
    <header className={s.header_wr}>
      <Container>
        {page === "/" && (
          <>
            <h1 className={s.header_main}>Harry Potter</h1>
            <p className={s.header_main_descr}>
              View all characters from the Harry Potter universe.
            </p>
          </>
        )}
        {page === "/favourite" && (
          <>
            <h2 className={clsx(s.header_main, s.header_fav)}>Liked ones</h2>
            <p className={s.header_main_descr}>
              Your favorite characters from the Harry Potter universe.
            </p>
          </>
        )}
      </Container>
    </header>
  );
};
