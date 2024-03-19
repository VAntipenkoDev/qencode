import React, { ReactNode } from 'react';

import { styled } from 'styled-components';

type TAuthorizationBlock = {
  title: string;
  children: ReactNode;
};

const AuthorizationBlockStyled = styled.div`
  width: 100%;
  min-width: 39rem;
  max-width: 40rem;
  @media (max-width: 500px) {
    min-width: 30rem;
  }
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 3rem;
  margin: 7.8rem 0 3.9rem 0;
  line-height: 3.8rem;
  font-family: 'BasisGrotesquePro-Bold', serif;
`;

const Content = styled.div``;

const AuthorizationBlock = ({ title, children }: TAuthorizationBlock) => (
  <AuthorizationBlockStyled>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </AuthorizationBlockStyled>
);

export default AuthorizationBlock;
