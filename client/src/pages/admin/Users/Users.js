import React, { useState } from 'react';
import { Tab, Button } from "semantic-ui-react";
import "./Users.scss";

export function Users() {

  const panes = [
    {
      menuItem: "Usuarios activos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios activos</h2>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Usuarios inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios inactivos</h2>
        </Tab.Pane>
      )
    },
  ]
  return (
    <>
      <div className="users-page">
        <Button className="users-page__add" primary onClick={() => console.log("Abrir formulario")}>
          Nuevo usuario
        </Button>
        <Tab menu={{secondary: true}} panes={panes} />
      </div>
    </>
  );
}
