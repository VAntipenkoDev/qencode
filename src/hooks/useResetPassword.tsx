import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '../api';
import displayToast from '../helpers/displayToast';
import { TDataError } from './useSignIn';

type TResetPassword = {
  password: string;
  confirmPassword: string;
};

export interface IResetPasswordResponse {
  error: number;
  detail: string | TDataError[];
  timestamp: number;
}

const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({
      password,
      confirmPassword,
    }: TResetPassword): Promise<AxiosResponse<IResetPasswordResponse>> =>
      api.post('/v1/auth/password-set', { password, confirmPassword }),
    onSuccess: (res) => {
      displayToast({
        data: ['Password changed successfully'],
        type: 'success',
      });
    },
    onError: (error: AxiosError<IResetPasswordResponse>) => {
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

export default useResetPassword;
