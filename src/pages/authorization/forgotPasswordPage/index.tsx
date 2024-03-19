import AuthorizationPage from '../index';
import AuthorizationBlock from '../../../components/authorizationBlock';
import ForgotPassword from '../../../components/forms/forgotPassword';

const ForgotPasswordPage = () => (
  <AuthorizationPage>
    <AuthorizationBlock title="Forgot Password?">
      <ForgotPassword />
    </AuthorizationBlock>
  </AuthorizationPage>
);

export default ForgotPasswordPage;
