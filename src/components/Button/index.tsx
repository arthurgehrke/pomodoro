/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  expand?: boolean;
  loading?: boolean;
  className?: string;
};

export const Button: React.FC<Props> = ({
  children,
  expand,
  loading,
  className,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      disabled={loading}
      className={classNames(
        {
          'w-full': expand,
          'opacity-50 cursor-not-allowed': loading,
        },
        `${className} bg-green-500 text-white uppercase font-bold px-4 py-2 rounded focus:shadow-outline focus:outline-none`,
      )}
    >
      {children}
    </button>
  );
};
