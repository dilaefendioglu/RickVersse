import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacter = async (params) => {
  try {
    const { data } = await api.get("/character", { params });
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};
