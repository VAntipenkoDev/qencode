import * as Yup from 'yup';
import { validationMsg } from '../../../constant';

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(validationMsg.invalidEmail)
    .required(validationMsg.requiredFiled),
});
