import { useEffect, useState } from "react";
import { getCharacter } from "../services/api";
import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";
import useDebounce from "../hooks/useDebounce";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCharacter({ name: debouncedSearch });
        setCharacters(data);
        console.log("Gelen veri:", data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    };
    loadData();
  }, [debouncedSearch]); //searchterm her değiştiğinde useeffect tekrar calısır.

  return (
    <main>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search Characters.."
      />
      <CharacterList characters={characters} isLoading={loading} />
    </main>
  );
};

export default Home;
