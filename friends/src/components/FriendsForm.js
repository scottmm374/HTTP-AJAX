import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody, CardTitle, } from 'reactstrap';



 class FriendsForm extends React.Component {
    render() {
      return (
        <div>
            <Card>
             <CardBody>
                 <CardTitle>Friends List</CardTitle>
                <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name-input" placeholder="Enter Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" id="age-input" placeholder="Enter Age" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <Button>Submit</Button>
                </Form>
            </CardBody>
            </Card>
        </div>
      );
    }
  }

  export default FriendsForm;

  