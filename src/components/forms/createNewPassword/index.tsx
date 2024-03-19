import React from 'react';
import { Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';

import Input from '../../ui/input';
import Button from '../../ui/button';
import ButtonGroup from '../../buttonGroup';
import { initialValues } from './data';
import { createNewPasswordValidationSchema } from './validationSchema';
import useResetPassword from '../../../hooks/useResetPassword';

const CreateNewPassword = () => {
  const { mutate: handleSubmit, isPending } = useResetPassword();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createNewPasswordValidationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <ToastContainer />
          <ButtonGroup>
            <Input
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              placeholder="Password"
              label="Password"
              hasIcon
            />
            <Input
              name="confirmPassword"
              type="password"
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
              placeholder="Password"
              label="Confirm Password"
              hasIcon
            />
          </ButtonGroup>
          <Button isLoading={isPending} type="submit">
            Reset Password
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewPassword;
