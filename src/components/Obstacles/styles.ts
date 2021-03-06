import styled, { css } from 'styled-components/native';

type Props = {
  width: number;
  height: number;
  left: number;
  gap?: number;
  color?: string;
  randomBottom: number;
};

const defaultCss = css<Omit<Props, 'gap'>>`
  position: absolute;

  ${({ width, height, left, color = 'green' }) => css`
    width: ${width}px;
    height: ${height}px;
    left: ${left}px;
    background-color: ${color};
  `}
`;

export const TopContainer = styled.View<Props>`
  position: absolute;
  background-color: green;
  ${defaultCss}
  bottom: ${({ height, gap = 0, randomBottom }) =>
    randomBottom + height + gap}px;
`;

export const BottomContainer = styled.View<Props>`
  ${defaultCss}
  bottom: ${({ randomBottom }) => randomBottom}px;
`;
