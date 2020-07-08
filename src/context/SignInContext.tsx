import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

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

interface AuthState {
  token: string;
  error: string;
}

const SignInContext = createContext<SignInContextInterface>(
  {} as SignInContextInterface,
);

const SignInProvider: React.FC<Props> = ({ children }: Props) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Pomodone:token');

    if (token) {
      return {
        token,
        error: '',
      };
    }

    return {} as AuthState;
  });

  const history = useHistory();

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/signin', {
      email,
      password,
    });

    const { token } = response.data;
    console.log(token);
    localStorage.setItem('@Pomodone:token', token);

    setData({ token, error: '' });
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
