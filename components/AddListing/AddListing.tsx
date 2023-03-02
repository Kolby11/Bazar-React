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
          So the buyer can contact you!
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="email" placeholder="Set the price of your item." />
        <Form.Text className="text-muted">
          So the buyer can contact you!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
  


    </Form>
  


  );
};

export default AddListing;