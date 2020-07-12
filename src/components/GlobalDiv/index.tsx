import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const GlobalDiv: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default GlobalDiv;
