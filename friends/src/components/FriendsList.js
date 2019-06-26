
import React from 'react';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';

// Component to extract each friends information

const FriendsList = props => {
    return (
        <div>
            {props.friends.map((friend) => (
                <Card>
                    <CardHeader><h2>My Friend</h2></CardHeader>
                    <CardBody>
                        <CardText><h4>{friend.name}</h4></CardText>
                        <CardText><strong>Age: </strong>{friend.age}</CardText>
                        <CardText><strong>Email: </strong>{friend.email}</CardText>
                    </CardBody>
                </Card>
             ))}    
        </div>
    )
}  

 export default FriendsList;