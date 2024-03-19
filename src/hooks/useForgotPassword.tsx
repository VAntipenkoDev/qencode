import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { TDataError } from './useSignIn';
import displayToast from '../helpers/displayToast';
import api from '../api';

type TForgotPassword = {
  email: string;
};

interface IForgotPasswordResponse {
  email: string;
  redirect_url: string;
  detail: string | TDataError[];
}

const useForgotPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ email }: TForgotPassword) =>
      api.post<TForgotPassword, AxiosResponse<IForgotPasswordResponse>>(
        '/v1/auth/password-reset',
        { email },
      ),
    onSuccess: ({ data }) => navigate('/create-new-password'),
    onError: (error: AxiosError<IForgotPasswordResponse>) => {
      if (error.response) {
        const errorInfo = error.response.data.detail;

        displayToast({
          data: Array.isArray(errorInfo)
            ? errorInfo.map((error) => `${error?.field_name} ${error?.error}`)
            : [errorInfo],
          type: 'error',
        });
      }
    },
  });
};

export default useForgotPassword;
