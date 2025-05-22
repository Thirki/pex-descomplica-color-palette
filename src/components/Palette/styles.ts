import styled from "styled-components";

export const Wrapper = styled.main<{ $paletteLength: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: ${(props) => `repeat(${props.$paletteLength}, 1fr)`};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ColorCard = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  padding: 8px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ColorPreview = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Color = styled.button`
  all: unset;
  background-color: #fff;
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #1a1a1a;
  font-weight: bold;
  text-transform: uppercase;
`;
