import React, { FC } from 'react';

interface Props {
  title: string;
}

const DefaultComponent: FC<Props> = ({ title }): JSX.Element => {
  return <>{title}</>;
};

export default DefaultComponent;
