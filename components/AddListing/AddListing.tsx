import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const AddListing = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />



    </Form>
  


  );
};

export default AddListing;