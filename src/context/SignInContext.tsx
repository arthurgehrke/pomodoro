import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInContextInterface {
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface Props {
  children: any;
}

const SignInContext = createContext<SignInContextInterface>(
  {} as SignInContextInterface,
);

const SignInProvider: React.FC<Props> = ({ children }: Props) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });
    console.log(response);
    const { token } = response.data;
    console.log(token);
  }, []);

  return (
    <SignInContext.Provider value={{ signIn }}>
      {children}
    </SignInContext.Provider>
  );
};

function useSignIn(): SignInContextInterface {
  const context = useContext(SignInContext);

  if (!context) throw new Error('Error');

  return context;
}

export { SignInProvider, useSignIn };
