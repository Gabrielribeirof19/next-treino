import type { NextPage } from "next";
import { Home } from "../modules/home";
import { getAllPokemons } from "../services/getAllPokemons";

type Props = {
  results: {
    name: string;
    url: string;
    imageUrl: string;
  }[];
};

const Index: NextPage = ({ results }: Props) => {
  return <Home results={results} />;
};

export async function getServerSideProps() {
  const data = await getAllPokemons();

  return {
    props: { results: data },
  };
}

export default Index;
