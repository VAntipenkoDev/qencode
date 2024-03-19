import { ReactNode } from 'react';
import { styled } from 'styled-components';
import Loadger from '../../loadger';

type TButton = {
  children: ReactNode | string;
  isMain?: boolean;
  type?: string;
  onClick?: () => void;
  isLoading?: boolean;
  icon?: ReactNode;
};

const ButtonStyled = styled.button<TButton>`
  width: 100%;
  transition: transform 0.05s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme, isMain }) =>
    isMain ? 'none' : `1px solid ${theme.colors.grayColor}`};
  border-radius: 0.8rem;
  padding: 1.4rem 0;
  color: ${({ theme, isMain }) =>
    isMain ? theme.colors.whiteColor : theme.colors.darkGray};
  background-color: ${({ theme, isMain, isLoading }) => {
    if (!isLoading)
      return isMain ? theme.colors.mainColor : theme.colors.whiteColor;

    return theme.colors.grayColor;
  }};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 4.3rem -1rem rgba(0, 0, 0, 0.26);
  }

  &:active {
    transform: scale(0.99);
  }
`;

const ButtonIconStyled = styled.div<TButton>`
  display: flex;
  flex: 0 0 auto;
  margin-right: 0.9rem;
`;

const ButtonContent = styled.span<TButton>`
  font-family: ${({ icon }) =>
    icon
      ? 'BasisGrotesquePro-Bold, serif'
      : 'BasisGrotesquePro-Regular, serif'};
  font-size: ${({ icon }) => (icon ? '1.4rem' : '1.6rem')};
`;

const Button = ({
  children,
  type,
  isMain = true,
  onClick,
  isLoading,
  icon,
}: TButton) => (
  <ButtonStyled
    onClick={onClick}
    type={type}
    isMain={isMain}
    isLoading={isLoading}
  >
    {isLoading ? (
      <Loadger />
    ) : (
      <>
        {icon && <ButtonIconStyled>{icon}</ButtonIconStyled>}
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </>
    )}
  </ButtonStyled>
);

export default Button;
