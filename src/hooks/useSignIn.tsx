import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import displayToast from '../helpers/displayToast';
import api from '../api';

export type TDataError = {
  field_name: string;
  error: string;
};

type TSignIn = {
  email: string;
  password: string;
};

export interface ILoginResponse {
  error: number;
  detail: string | TDataError[];
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}

export const useSignIn = () => {
  return useMutation({
    mutationFn: async ({ email, password }: TSignIn) => {
      return api.post<TSignIn, AxiosResponse<ILoginResponse>>(
        '/v1/auth/login',
        { email, password },
      );
    },
    onSuccess: (res) => {
      displayToast({
        data: ['Success Sign In'],
        type: 'success',
      });
    },
    onError: (error: AxiosError<ILoginResponse>) => {
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
