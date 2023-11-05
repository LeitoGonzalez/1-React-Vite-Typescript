import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type MyModalProps = {
  show: boolean;
  onHide: () => void;
  handleColorChange: (color: string) => void;
};

const ModalColorPick = ({ show, onHide, handleColorChange }: MyModalProps) => {
  //variables para guardad el valor seleccionado del fomulario
  const [selectedColor, setSelecterColor] = useState("#FFF");
  const hanldleColorPickerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) =>{
    setSelecterColor(event.target.value);
  };

  //al hacer click en aceptar, se pasa el color elegido a la fuincion que proviene del componente padre
  // y se cierra el modal.

  const handleAcceptClick = () => {
    handleColorChange(selectedColor);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="modal show"

    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar color</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/*Color Picker*/}
          <Form.Label htmlFor="exampleColorInput">Elije un color</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#FFF"
            title="Elije tu color"
            onChange={hanldleColorPickerChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button variant="primary" onClick={handleAcceptClick}>Aceptar</Button>
        </Modal.Footer>
        
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalColorPick;
