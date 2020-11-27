import { Alert } from "antd";

const Alerta = (error) => {
    const { tipo, description, titulo } = error.error;
    return ( 
        <Alert
          message={titulo}
          description={description}
          type={tipo}
          showIcon
        />
     );
}
 
export default Alerta;