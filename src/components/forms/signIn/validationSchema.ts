import * as Yup from 'yup';
import { validationMsg } from '../../../constant';

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(validationMsg.invalidEmail)
    .required(validationMsg.requiredFiled),
  password: Yup.string()
    .required(validationMsg.requiredFiled)
    .min(8, 'Too short password'),
});
