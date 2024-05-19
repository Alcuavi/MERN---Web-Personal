import React from 'react';
import { Form, Image } from "semantic-ui-react";

export function UserForm(props) {
    const { close, onReload, user } = props;

  return (
    <Form className="user-form">
      <div className="user-form__avatar">
        <span>AVATAR</span>
      </div>

      <Form.Group widths="equal">
        <Form.Input name="firstname" placeholder="Nombre" />
        <Form.Input name="lastname" placeholder="Apellidos" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="email" placeholder="Correo electronico" />
        <Form.Dropdown placeholder="Selecciona un rol" options={roleOptions} selection/>
      </Form.Group>

      <Form.Input type="password" name="password" placeholder="Contraseña" />

      <Form.Button type="submit" primary fluid>
        {user ? "Actualizar usuario" : "Crear usuario"}
      </Form.Button>
    </Form>
  );
}

const roleOptions = [
    {
        key: "user",
        text: "Usuario",
        value: "user"
    },
    {
        key: "admin",
        text: "Administrador",
        value: "admin"
    },
];