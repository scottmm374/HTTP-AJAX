import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody, CardSubtitle, CardHeader} from 'reactstrap';
import Axios from 'axios';

// Form for New Friends

 class FriendsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
       
    }

    changeHandler = friendInfo => {
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          [friendInfo.target.name]: friendInfo.target.value
        }
      })
    }


}; 

  postFriend = info => {
    axios.post('http://localhost:5000/friends')
    .then(res => {
      //not sure yet
    })
    .catch(err => {
      // not sure yet
    })
  }
    
}

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

  