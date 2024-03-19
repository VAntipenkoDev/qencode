import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const AuthorizationLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 12%;
  @media (max-width: 500px) {
    padding: 12% 2rem;
  }
`;

const AuthorizationLayout = () => (
  <AuthorizationLayoutStyled>
    <Outlet />
  </AuthorizationLayoutStyled>
);

export default AuthorizationLayout;
