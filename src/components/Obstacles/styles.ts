import styled, { css } from 'styled-components/native';

type Props = {
  width: number;
  height: number;
  left: number;
  gap?: number;
};

const defaultCss = css<Omit<Props, 'gap'>>`
  position: absolute;
  background-color: green;
  ${({ width, height, left }) => css`
    width: ${width}px;
    height: ${height}px;
    left: ${left}px;
  `}
`;

export const TopContainer = styled.View<Props>`
  position: absolute;
  background-color: green;
  ${defaultCss}
  bottom: ${({ height, gap = 0 }) => 0 + height + gap}px;
`;

export const BottomContainer = styled.View<Props>`
  ${defaultCss}
  bottom: 0;
`;
