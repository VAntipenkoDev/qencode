import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

import Logo from '../../svg/logo';

type TAuthorizationPage = {
  children: ReactNode
}

const Title = styled.div`
  text-align: center;
`
const AuthorizationPageStyled = styled.div``

const AuthorizationPage = ({ children }: TAuthorizationPage) => (
  <AuthorizationPageStyled>
    <Title>
      <Logo />
    </Title>
    {children}
  </AuthorizationPageStyled>
)

export default AuthorizationPage;