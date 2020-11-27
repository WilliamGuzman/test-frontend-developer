import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;


const HeaderMenu = () => {
  return (
    <Header>
      <div className="logo">
        <i className="fab fa-github"> Github Api Users </i>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderMenu;
