import { GetOneProkemonResult } from "../../services/getOneDocument";
import { Container, Content, Description, Images } from "./styles";

type Props = {
  pokemon: GetOneProkemonResult;
};

export const PokemonModule = ({ pokemon }: Props) => {
  return (
    <Container>
      <Content>
        <Images>
          {pokemon?.sprites
            .filter((url) => url !== null)
            .map((url, index) => (
              <img key={index} src={url} />
            ))}
        </Images>
        <Description>
          <div>
            <p>Name:</p>
            <p>{pokemon?.name}</p>
          </div>
          <div>
            <p>Weight:</p> <p>{pokemon?.weight}</p>
          </div>
          <div>
            <p>Abilities:</p>
            {pokemon?.abilities?.map((ability, index, array) => (
              <p key={index}>{ability.ability.name}{index !== array.length -1 && ', '}</p>
            ))}
          </div>
          <div>
            <p>Type(s):</p>
            {pokemon?.types?.map((type, index, array) => (
              <p key={index}>{type.type.name} {index !== array.length -1 && 'and'}</p>
            ))}
          </div>
        </Description>
      </Content>
    </Container>
  );
};
