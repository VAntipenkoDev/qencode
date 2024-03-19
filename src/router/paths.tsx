import AuthorizationLayout from '../layouts/authorization';
import SignInPage from '../pages/authorization/signInPage';
import ResetPasswordPage from '../pages/authorization/resetPasswordPage';
import ForgotPasswordPage from '../pages/authorization/forgotPasswordPage';

const paths = [
  {
    path: '/',
    element: <AuthorizationLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: <SignInPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'create-new-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
];

export default paths;
