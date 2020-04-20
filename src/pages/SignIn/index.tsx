import React from 'react';
import { Form } from '@unform/core';
import Input from '../../components/Input';

import { Container } from './styles';

interface DataProp {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  function handleSubmit(data: DataProp) {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="E-mail *" />
        <Input name="password" placeholder="Senha *" />
      </Form>
      <button type="submit">Acessar</button>
    </Container>
  );
};

export default SignIn;
