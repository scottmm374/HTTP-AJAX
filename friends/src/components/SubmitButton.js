import React from 'react';
import { Button } from 'reactstrap';
// Add New Friends Submit Button

class  extends SubmitButton React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
           
        }
    }; 

    changeHandler = info => {
        this.setState({
            newFriend: {
                ...this.state.newFriend, 
                [info.target.name]: info.target.value
            }


        })
    }

    render() {
        // <div>
        //     <Button onSubmit={this.state.changeHandler}
        // </div>
    }
    
}