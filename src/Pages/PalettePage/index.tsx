import { useParams } from "react-router";
import { Subtitle, Title, Wrapper } from "./styles";
import { Palette } from "../../components/Palette";
import { useGetPalette } from "../../hooks";

export const PalettePage = () => {
  const { colors } = useParams<{ colors: string }>();
  const { colors: colorsList } = useGetPalette(colors || "");

  return (
    <Wrapper>
      <Title>Paleta de cores!</Title>
      <Subtitle>Paleta de cores!</Subtitle>
      <Palette palette={colorsList} />
    </Wrapper>
  );
};
