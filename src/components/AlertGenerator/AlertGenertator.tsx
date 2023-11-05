import { Alert } from "react-bootstrap";

//Se especifica cuales son los props y el tipo de dato que recibe
type AlertGeneratorProps = {
  message: string;
};

//el componente hijo tiene argumentos del tipo AlertGeneratorProps
const AlertGenertator = ({message}:AlertGeneratorProps) => {
  return (
    <Alert variant="succes" className="mt-2 w-25">
      <Alert.Heading>Mensaje Recibido</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default AlertGenertator;
