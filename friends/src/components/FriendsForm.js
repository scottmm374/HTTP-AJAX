import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody, CardSubtitle, CardHeader} from 'reactstrap';
// import axios from 'axios';

// Form for New Friends

 class FriendsForm extends React.Component  {
    state = {
      friend: {
            name: '',
            age: '',
            email: ''
              
    }
  }
    handleSubmit = event => {
      // this.props.addFriend(this.state.friend);
      this.setState({
        friend: {
          [event.target.name]: event.target.value
        }
      });
      
    }

    

    render() {
      return (
        <div>
            <Card body inverse color="info" >
            <CardHeader tag="h3">Friends</CardHeader>
             <CardBody>
                 <CardSubtitle>Add Me!</CardSubtitle>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name-input" placeholder="Enter Name" onChange={this.handleSubmit} value={this.state.friend.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" id="age-input" placeholder="Enter Age" onChange={this.handleSubmit} value={this.state.friend.age}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="text" name="email" id="Email" placeholder="Enter Email" onChange={this.handleSubmit} value={this.state.friend.email}/>
                </FormGroup>
                <Button color="warning" size="lg" block>Submit</Button>
                </Form>
            </CardBody>
            </Card>
        </div>
      );
    };
  }

  export default FriendsForm;

  