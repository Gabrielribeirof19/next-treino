import { AxiosResponse } from "axios";
import { api } from "./config";

type Response = {
  name: string;
  url: string;
};

export const getAllPokemons = async (limit?: number, offset?: number) => {
  const urlParams = new URLSearchParams();

  urlParams.append("limit", limit?.toString() ?? "102");
  urlParams.append("offset", offset?.toString() ?? "0");

  const { data }: AxiosResponse<{ results: Response[] }> =
    await api.get("pokemon", {
      params: urlParams,
    });

  return data.results.map((pokemon, index) => ({
    ...pokemon,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
  }));
};
