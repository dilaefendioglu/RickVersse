import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacter = async () => {
  try {
    const { data } = await api.get("/character");
    return data.results;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};
