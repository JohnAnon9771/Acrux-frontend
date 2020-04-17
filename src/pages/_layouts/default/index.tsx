import React, { ReactChild } from 'react';

interface Props {
  children: ReactChild
}

const DefaultLayout: React.FC<Props> = ({ children }: Props) => <div>{children}</div>;

export default DefaultLayout;
