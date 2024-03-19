import React, { useState } from 'react';
import { Field } from 'formik';
import { styled } from 'styled-components';

import Eyes from '../../../svg/eyes';

type TInput = {
  name: string;
  type?: string;
  errors: string | undefined;
  placeholder?: string;
  touched?: boolean;
  label?: string;
  hasIcon?: boolean;
};

const InputBlockStyled = styled.div``;

const InputWrapperStyled = styled.div<{ hasErrors?: any }>`
  border: 1px solid
    ${({ hasErrors, theme }) =>
      hasErrors ? theme.colors.errorColor : theme.colors.grayColor};
  border-radius: 0.6rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input`
  width: 100%;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.5rem;
  padding: 1.4rem 1.2rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor};
    font-family: BasisGrotesquePro-Regular, serif;
  }
`;

const InputLabelStyled = styled.label`
  font-size: 1.5rem;
  line-height: 2.1rem;
  display: block;
  margin-bottom: 0.8rem;
  font-family: BasisGrotesquePro-Bold;
`;

const InputIcon = styled.div`
  position: absolute;
  right: 1.7rem;

  button {
    display: flex;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
`;

const InputErrorMsg = styled.div`
  padding: 0.3rem 0;

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.errorColor};
    font-family: BasisGrotesquePro-Regular, serif;
  }
`;

const Input = ({
  name,
  type = 'text',
  errors,
  touched,
  label,
  placeholder,
  hasIcon = false,
}: TInput) => {
  const [showHidden, setShowHidden] = useState(false);
  const toggleHidden = () => setShowHidden((prevState) => !prevState);

  return (
    <InputBlockStyled>
      {label && <InputLabelStyled>{label}</InputLabelStyled>}
      <InputWrapperStyled hasErrors={errors?.length && touched}>
        <Field name={name}>
          {({ field }: any) => (
            <>
              <InputStyled
                placeholder={placeholder}
                type={type === 'password' && showHidden ? 'text' : type}
                {...field}
              />
              {hasIcon && type === 'password' && (
                <InputIcon>
                  <button type="button" onClick={toggleHidden}>
                    <Eyes />
                  </button>
                </InputIcon>
              )}
            </>
          )}
        </Field>
      </InputWrapperStyled>
      {errors?.length && touched && (
        <InputErrorMsg>
          {' '}
          <span>{errors}</span>{' '}
        </InputErrorMsg>
      )}
    </InputBlockStyled>
  );
};

export default Input;
