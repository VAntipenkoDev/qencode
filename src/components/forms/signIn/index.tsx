import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Input from '../../ui/input';
import ButtonGroup from '../../buttonGroup';
import Button from '../../ui/button';
import Delimiter from '../../delimiter';
import GitIcon from '../../../svg/git';
import GoogleIcon from '../../../svg/google';
import { signInValidationSchema } from './validationSchema';
import { initialValues } from './data';
import { useSignIn } from '../../../hooks/useSignIn';
import Loadger from '../../loadger';

type TSignInStyledLink = {
  position: 'start' | 'end' | 'center';
};

const SignInStyledLink = styled.div<TSignInStyledLink>`
  width: 100%;
  text-align: ${({ position, theme }) => [position]};
  font-size: 1.5rem;

  span {
    font-family: BasisGrotesquePro-Regular, serif;
    padding-right: 0.5rem;
  }

  a {
    font-family: BasisGrotesquePro-Regular, serif;
  }
`;

const SignIn = () => {
  const { mutate: handleSubmit, isPending } = useSignIn();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidationSchema}
      onSubmit={(values, formikHelpers) => handleSubmit(values)}
    >
      {({ errors, touched, dirty, validateForm, submitForm }) => (
        <Form>
          <ToastContainer />
          <ButtonGroup direction="horizontal" space="small">
            <Button isMain={false} icon={<GoogleIcon />} type="button">
              Google
            </Button>
            <Button isMain={false} icon={<GitIcon />} type="button">
              Github
            </Button>
          </ButtonGroup>
          <Delimiter />
          <ButtonGroup>
            <Input
              name="email"
              errors={errors.email}
              touched={touched.email}
              placeholder="Work email"
            />
            {dirty && !errors.email && (
              <>
                <Input
                  name="password"
                  errors={errors.password}
                  touched={touched.password}
                  placeholder="Password"
                  hasIcon
                  type="password"
                />
                <SignInStyledLink position="end">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </SignInStyledLink>
              </>
            )}
          </ButtonGroup>
          <ButtonGroup direction="vertical">
            <Button type="submit" isLoading={isPending}>
              Log in to Qencode
            </Button>
          </ButtonGroup>
          <SignInStyledLink position="center">
            <span>Is your company new to Qencode?</span>
            <Link to="/forgot-password">Sign up</Link>
          </SignInStyledLink>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
