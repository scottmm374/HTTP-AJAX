
import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';





const FriendsList = props => {
    return (
        <div>
            {props.friends.map((friend) => (
                <Card>
                <CardBody>
                    <CardTitle>Friend</CardTitle>
                    <CardText><h2>{friend.name}</h2></CardText>
                    <CardText><em>Age:</em>{friend.age}</CardText>
                    <CardText><em>Email:</em>{friend.email}</CardText>
                </CardBody>
            </Card>
         ))} 
            
        </div>
    )

}  

 export default FriendsList;