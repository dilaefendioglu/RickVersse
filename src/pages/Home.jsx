import { useEffect, useState } from "react";
import { getCharacter } from "../services/api";
import CharacterList from "../components/CharacterList";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCharacter();
        setCharacters(data);
        console.log("Gelen veri:", data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    };
    loadData();
  }, []); //searchterm her değiştiğinde useeffect tekrar calısır.

  return (
    <main>
      <CharacterList characters={characters} isLoading={loading} />
    </main>
  );
};

export default Home;
