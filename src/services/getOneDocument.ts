import { AxiosResponse } from "axios";
import { api } from "./config";

export type GetOneProkemonResponse = {
  id: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  name: string;
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: null;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export type GetOneProkemonResult = {
  id: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  name: string;
  sprites: string[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export const getOnePokemon = async (
  id: number
): Promise<GetOneProkemonResult> => {
  const { data }: AxiosResponse<GetOneProkemonResponse> = await api.get(
    `pokemon/${id}`
  );

  const formattedData = {
    ...data,
    sprites: [
      data.sprites.back_default,
      data.sprites.back_female,
      data.sprites.back_shiny,
      data.sprites.back_shiny_female,
      data.sprites.front_default,
      data.sprites.front_female,
      data.sprites.front_shiny,
      data.sprites.front_shiny_female,
    ],
  };

  return formattedData;
};
