import { useState } from "react";
import AlertGenertator from "../AlertGenerator/AlertGenertator";

const AlertMesage = () => {
  //guarda el valor del campo de  texto
  const [inputValue, setInputValue] = useState('');

  //guarda el mensaje
  const [message, setMessage] = useState('');

  //muestra el compontnte hijo segun el estado
  const [showAlert, setShowAlert] = useState(false);

  //si el campo de texto no esta vacio, se guarda el texto que escribio el usuario en 'message' y
  //se renderiza el conmponente hijo
  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setShowAlert(true);
      setMessage(inputValue);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <div className="m-3">
      <h2>Ejemplo 2</h2>
      {/*Componente padre*/}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Enviar</button>

      {/*Componente hijo*/}
      {showAlert && <AlertGenertator message={message}/>}
    </div>
  );
};

export default AlertMesage;
