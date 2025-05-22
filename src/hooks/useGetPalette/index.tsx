interface IPaletteReturn {
  colors: string[];
}

export const useGetPalette = (colorsProps: string): IPaletteReturn => {
  const colors = colorsProps.split("-").filter(Boolean); // filtra vazios se houver

  return {
    colors,
  };
};
