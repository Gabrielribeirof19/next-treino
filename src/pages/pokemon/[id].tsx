import type { NextPage } from "next";
import { PokemonModule } from "../../modules/pokemon";
import { getOnePokemon, GetOneProkemonResult } from "../../services/getOneDocument";

type Props = {
  pokemon: GetOneProkemonResult
}
const Pokemon: NextPage = ({pokemon}: Props) => {
  return <PokemonModule  pokemon={pokemon}/>;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  
  const data = await getOnePokemon(Number(params.id));
  return {
    props: { pokemon: data },
  };
}

export default Pokemon;
