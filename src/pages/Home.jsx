import { useEffect, useState } from "react";
import { getCharacter } from "../services/api";
import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";
import useDebounce from "../hooks/useDebounce";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getCharacter({ name: debouncedSearch, page: page });
        if (data && data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]);
        }
        console.log("Gelen veri:", data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setCharacters([]);
        setLoading(false);
      }
    };
    loadData();
  }, [debouncedSearch, page]); //searchterm her değiştiğinde useeffect tekrar calısır.

  return (
    <main>
      <SearchInput
        value={searchTerm}
        onChange={(value) => {
          setSearchTerm(value);
          setPage(1);
        }}
        placeholder="Search Characters.."
      />
      <CharacterList characters={characters} isLoading={loading} />

      <div className="pagination-control">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Before
        </button>

        <span>SAYFA {page}</span>

        <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>
      </div>
    </main>
  );
};

export default Home;
