import { toast } from "react-toastify";
import { Color, ColorCard, Wrapper, ColorPreview, Text } from "./styles";

interface IPaletteProps {
  palette: string[];
}

export const Palette: React.FC<IPaletteProps> = ({ palette }) => {
  const handleCopyColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const text = event.currentTarget.innerText;
    navigator.clipboard.writeText(text);
    toast("Cor copiada com sucesso!");
  };

  return (
    <Wrapper $paletteLength={palette.length}>
      {palette.map((color, index) => (
        <ColorCard key={color + index} $color={`#${color}`}>
          <Color onClick={handleCopyColor}>
            <ColorPreview $color={`#${color}`} />
            <Text>#{color}</Text>
          </Color>
        </ColorCard>
      ))}
    </Wrapper>
  );
};
