import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";

const ButtonColorPick = () => {
  //color inicial
  const [buttonColor, setButtonColor] = useState("#3d7c40");

  //manejo del modal o popup
  const [showModal, setShowModal] = useState(false);

  //funcion para cambiar color
  const handleColorChange = (color: string) => {
    setButtonColor(color);
  };

  //al hacer click se muestra el modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="m-3">
      <h2>Ejemplo 3</h2>
      {/*Componente Padre */}

      <Button
        variant="primary"
        style={{ backgroundColor: buttonColor }}
        onClick={handleShowModal}
      >
        Cambiar color
      </Button>

      {/*Componente hijo*/}
      {showModal && (
        <ModalColorPick
          show={showModal}
          onHide={() => setShowModal(false)}
          handleColorChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default ButtonColorPick;
