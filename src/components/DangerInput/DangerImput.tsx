import React, { useState } from "react";

import { Form } from "react-bootstrap";

import DangerBar from "../DangerBar/DangerBar";

const DangerInput = () => {
  //guarda el valor por el ususario
  const [value, setValue] = useState(0);

  //actualizar estado de value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="m-3 w-50">
      <h2>Ejemplo1</h2>

      {/*COmponente padre*/}
      <Form.Range value={value} onChange={handleChange}/>

      {/*COmponente hijo*/}
      <DangerBar value={value}/>
    </div>
  )
}

export default DangerInput;