import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody, CardSubtitle, CardHeader} from 'reactstrap';
import axios from 'axios';

// Form for New Friends

 class FriendsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newFriend: {
            name: '',
            age: null,
            email: ''
        }      
    }
  }
    changeHandler = event => {
      this.setState({
        newFriend: {

          [event.target.name]: event.target.value
        }
      });
    };

    postFriend = event => {
      event.preventDefault();
      const { name, age, email } = this.state.newFriend
      const  newFriend ={ name, age, email };
     console.log('postFriend', name, age, email);

      axios.post('http://localhost:5000/friends', newFriend)
        .then((res => {
          console.log("res", res);
        }))
        .catch((err => {
          console.log("err", err);
        }));
    };

    render() {
      const {name, age, email } = this.state
      return (
        <div>
            <Card body inverse color="info" >
            <CardHeader tag="h3">Friends</CardHeader>
             <CardBody>
                 <CardSubtitle>Add Me!</CardSubtitle>
                <Form onSubmit={this.postFriend}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name-input" placeholder="Enter Name" onChange={this.changeHandler} value={name} />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" id="age-input" placeholder="Enter Age" onChange={this.changeHandler} value={age}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="text" name="email" id="Email" placeholder="Enter Email" onChange={this.changeHandler} value={email}/>
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

  