import * as Yup from 'yup';
import { validationMsg } from '../../../constant';

export const createNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required(validationMsg.requiredFiled)
    .min(8, 'Too short password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});
