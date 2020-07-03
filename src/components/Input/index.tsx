/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';
import { Icon } from '../Icon';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error: any;
  inputClass: string;
  masked?: boolean;
  register?: any;
};

const Input: React.FC<Props> = ({
  error,
  inputClass,
  register,
  masked = false,
  ...rest
}: Props) => {
  return (
    <>
      <div className="relative">
        <input
          className={`form-input ${inputClass} ${
            error[rest.name!] &&
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
          }`}
          ref={register}
          {...rest}
        />

        {error[rest.name!] && (
          <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
              <Icon
                className="w-5 h-5 text-red-900"
                strokeWidth="1"
                name="exclamationCircle"
              />
            </div>
          </>
        )}
      </div>
      {error[rest.name!] && (
        <p className="mt-1 mb-2 text-sm text-red-600" id="email-error">
          {error[rest.name!].message}
        </p>
      )}
    </>
  );
};

export default Input;
