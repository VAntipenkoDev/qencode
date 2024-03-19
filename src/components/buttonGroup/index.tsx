import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

type TButtonGroup = {
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  space?: 'small' | 'middle' | 'large';
};

const ButtonGroupStyled = styled.div<TButtonGroup>`
  display: flex;
  margin: 3rem 0 2rem 0;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ theme, space }) =>
    theme.components.buttonGroup.spaces[space || '']};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ButtonGroup = ({
  children,
  direction = 'vertical',
  space = 'middle',
}: TButtonGroup) => (
  <ButtonGroupStyled direction={direction} space={space}>
    {children}
  </ButtonGroupStyled>
);
export default ButtonGroup;
