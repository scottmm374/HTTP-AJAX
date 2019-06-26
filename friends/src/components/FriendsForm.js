import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody, CardSubtitle, CardHeader} from 'reactstrap';



 class FriendsForm extends React.Component {
    render() {
      return (
        <div>
            <Card body inverse color="info">
            <CardHeader tag="h3">Friends</CardHeader>
             <CardBody>
                 <CardSubtitle>Add Me!</CardSubtitle>
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
                    <Input type="email" name="email" id="Email" placeholder="Enter Email" />
                </FormGroup>
                <Button color="warning" size="lg" block>Submit</Button>
                </Form>
            </CardBody>
            </Card>
        </div>
      );
    }
  }

  export default FriendsForm;

  