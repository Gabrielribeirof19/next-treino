import Image from "next/image";
import { useRouter } from "next/router";
import { Container, Content } from "./styles";

type Props = {
  results: {
    name: string;
    url: string;
    imageUrl: string;
  }[];
};

export const Home = ({ results }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        {results.map(({ name, url, imageUrl }, index) => (
          <div key={name} onClick={() => router.push(`/pokemon/${index + 1}`)}>
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </Content>
    </Container>
  );
};
