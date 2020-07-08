import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useSignIn } from '../../context/SignInContext';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LoginImage } from '../../assets/login_img.svg';

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const { signIn } = useSignIn();

  const onSubmit = async (data: any): Promise<void> => {
    try {
      console.log(data)
      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24" />

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <Logo className="w-48 mx-auto mb-3 h-20" />
            <span className="mx-auto font-bold text-lg">PomoDone</span>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg">
                  Email
                </label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  register={register}
                  error={errors}
                  placeholder="seu@email.com"
                  inputClass="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  register={register}
                  error={errors}
                  placeholder="sua senha"
                  inputClass="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <Button
                type="submit"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                expand
              >
                Começar a Estudar
              </Button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Não tem uma conta ?{' '}
                <Link
                  to={{ pathname: '/signup' }}
                  className="underline font-semibold"
                >
                  Faça uma aqui.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <LoginImage className="object-cover w-full h-screen hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
