import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "./userInfo.scss";

const UserInfo = ({ history }) => {
  const cadena = history.location.pathname;
  const usuario = cadena.substr(11);
  const [datos, tomarDatos] = useState([]);

  const informacion = async (usuario) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${usuario}`
      );
      tomarDatos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const state = {
    labels: ["Seguidores"],
    datasets: [
      {
        label: "Seguidores",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [datos.followers],
      },
    ],
  };

  useEffect(() => {
    informacion(usuario);
  }, [usuario]);

  return (
    <div className="formulario">
      <img className="foto_usuario" alt="user_avatar" src={datos.avatar_url} />
      <div className="informacion_usuario">
        <i className="fab fa-github"> {datos.login}</i>
      </div>
      <div className="seguidores">
        <Bar
          data={state}
          options={{
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: { beginAtZero: true, max: 10, min: 0 },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserInfo;
