import AuthorizationPage from '../index';
import AuthorizationBlock from '../../../components/authorizationBlock';
import SignIn from '../../../components/forms/signIn';

const SignInPage = () => (
  <AuthorizationPage>
    <AuthorizationBlock title="Log in to your account">
      <SignIn />
    </AuthorizationBlock>
  </AuthorizationPage>
);

export default SignInPage;
