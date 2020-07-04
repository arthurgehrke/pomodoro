import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LoginImage } from '../../assets/login_img.svg';

const SignIn: React.FC = () => {
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24" />

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <Logo className="w-48 mx-auto mb-3 h-20" />
            <span className="mx-auto font-bold text-lg">PomoDone</span>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <label className="text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite o seu melhor email aqui !"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label className="text-lg">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Escolha uma senha !"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Começar a Estudar"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
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
