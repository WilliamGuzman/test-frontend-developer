import React, { useState } from "react";
import { List, Avatar, Input } from "antd";
import Alerta from "../Layout/Alertas";
import axios from "axios";
import "./users.css";
import { Link } from "react-router-dom";

const { Search } = Input;

const Users = () => {
  //useState
  const [usuarios, obtenerUsuarios] = useState();
  const [error, mostrarError] = useState({
    tipo: "",
    titulo: "",
    description: "",
    estado: false,
  });

  //Notificacion

  const buscarUsuarios = async (username) => {
    const posicion = username.indexOf("react");

    if (username.length <= 4) {
      mostrarError({
        tipo: "error",
        titulo: "Error",
        description: "El nombre de usuario debe ser mayor de 4 catacteres",
        estado: true,
      });
      return;
    }

    if (username.trim() === "") {
      mostrarError({
        tipo: "error",
        titulo: "Error",
        description: "Ingrese un nombre de usuario",
        estado: true,
      });
      return;
    }
    if (posicion !== -1) {
      mostrarError({
        tipo: "error",
        titulo: "Error",
        description:
          "No se permite la busqueda de usuarios que contenga la palabra react",
        estado: true,
      });
      return;
    }

    mostrarError({
      tipo: "",
      titulo: "",
      description: "",
      estado: false,
    });

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${username}`
      );
      obtenerUsuarios(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error.estado ? <Alerta error={error} /> : null}
      <Search
        placeholder="Ingresar nombre de usuario de GitHub"
        allowClear
        enterButton="Buscar"
        size="large"
        style={{ width: 400  }}
        onSearch={buscarUsuarios}
      />

      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={usuarios}
        footer={
          <div>
            <b>Usuarios</b> GitHub API
          </div>
        }
        renderItem={(item) => (
          <List.Item key={item.title}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar_url} />}
              title={<Link to={`/user-info/${item.login}`}>{item.login}</Link>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Users;
