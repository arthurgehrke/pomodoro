import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api';

export interface SignUpState {
  name: string;
  email: string;
  password: string;
}

interface SignUpContextInterface {
  signUpUser(user: SignUpState): void;
}

interface Props {
  children: any;
}

const SignUpContext = createContext<SignUpContextInterface>(
  {} as SignUpContextInterface,
);

const SignUpProvider: React.FC<Props> = ({ children }: Props) => {
  const signUpUser = useCallback(async ({ name, email, password }) => {
    await api.post('signup', {
      name,
      email,
      password,
    });
  }, []);

  return <SignUpContext.Provider value={{ signUpUser }} />;
};

function useSignUp(): SignUpContextInterface {
  const context = useContext(SignUpContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { SignUpProvider, useSignUp };
