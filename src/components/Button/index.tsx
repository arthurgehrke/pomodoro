/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
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
    <button {...rest} disabled={loading} className={className}>
      {children}
    </button>
  );
};
