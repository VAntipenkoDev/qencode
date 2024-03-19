import React from 'react';
import { Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Input from '../../ui/input';
import Button from '../../ui/button';
import ButtonGroup from '../../buttonGroup';
import { initialValues } from './data';
import { forgotPasswordValidationSchema } from './validationSchema';
import useForgotPassword from '../../../hooks/useForgotPassword';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { mutate: handleSubmit, isPending } = useForgotPassword();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgotPasswordValidationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <ToastContainer />
          <Input
            name="email"
            errors={errors.email}
            touched={touched.email}
            placeholder="Enter your email"
          />
          <ButtonGroup direction="vertical">
            <Button isLoading={isPending} type="submit">
              Send
            </Button>
            <Button
              isLoading={isPending}
              type="button"
              isMain={false}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
