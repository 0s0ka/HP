import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { ButtonShowLiked } from "../../UI/ButtonShowLiked/ButtonShowLiked";
import s from "./Home.module.css";

export const Home = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          `https://hp-api.onrender.com/api/characters`
        );
        const result = await response.json();
        setCharactersData(result);
      } catch (error) {
        console.error("Error fetching", error);
      }
    }
    fetchCharacters();
  }, []);
  return (
    <>
      <audio controls loop className={s.audio}>
        <source src="public/maintheme.mp3" type="audio/mpeg" />
      </audio>
      <Layout charactersData={charactersData}>
        {charactersData.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              gender={character.gender}
              house={character.house}
              core={character.wand.core}
              alive={character.alive}
              actor={character.actor}
              image={character.image}
            />
          );
        })}
        <ButtonShowLiked path={"favourite"} />
      </Layout>
    </>
  );
};
