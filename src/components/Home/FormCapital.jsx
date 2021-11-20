import React from "react";
import {Form, Button} from "react-bootstrap"
const FormCapital = ({ handleUserName, FetchDataApi }) => {
  return (
 
    <Form className="d-flex"
    onSubmit={e => FetchDataApi(e)}
    >
    <Form.Control id="inlineFormInputName" 
    placeholder="Ingrese el usuario" 
    required
    onChange={({target}) => handleUserName(target)}
    />
    <Button  type="submit">Submit</Button>
    </Form>
  );
};

export default FormCapital;
