import AuthorizationPage from '../index';
import AuthorizationBlock from '../../../components/authorizationBlock';
import CreateNewPassword from '../../../components/forms/createNewPassword';

const ResetPasswordPage = () => (
  <AuthorizationPage>
    <AuthorizationBlock title="Create new Password?">
      <CreateNewPassword />
    </AuthorizationBlock>
  </AuthorizationPage>
);

export default ResetPasswordPage;
