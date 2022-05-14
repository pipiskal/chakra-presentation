import styled from 'styled-components';

import { IconOptionsType } from './Icon';

type WrapperProps = {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: keyof IconOptionsType['color'];
  spacingRight: boolean;
};

const options: IconOptionsType = {
  color: {
    lightGray: 'filter: invert(0.6);',
    gray: 'filter: invert(0.8);',
    black: 'filter: invert(0);',
    white: 'filter: invert(1);',
  },
  size: {
    xs: { width: 12, height: 12 },
    sm: { width: 22, height: 22 },
    md: { width: 30, height: 30 },
    lg: { width: 36, height: 36 },
  },
};

export const Wrapper = styled.img<WrapperProps>`
  ${(props) => props.size && options.size[props.size]};
  ${(props) => props.color && options.color[props.color]};
`;
