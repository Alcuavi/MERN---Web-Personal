import React from 'react';
import { Form } from "semantic-ui-react";

export function LoginForm() {
  return (
    <Form>
      <Form.Input name="email" placeholder="Correo electronico"/>
      <Form.Input name="password" type="password" placeholder="Contraseña"/>
      <Form.Button type="submit" primary fluid>
        Entrar
      </Form.Button>
    </Form>
  );
}
