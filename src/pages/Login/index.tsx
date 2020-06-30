import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <form className="m-auto sm:w-1/2 md:w-2/5 lg:w-2/5 xl:1/5">
        <h1 className="text-3xl mb-8 text-center text-gray-600">
          Acesse sua conta
        </h1>
        <div className="mx-auto">
          <input
            className="appearance-none focus:outline-none w-full h-12 bg-white border-2 rounded-tl rounded-tr pl-3 pt-1 pb-1"
            type="text"
            placeholder="Usuário"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
