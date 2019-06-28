
import React from 'react';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';

// Component to extract each friends information

const FriendsList = props => {
    return (
        <div>
            {props.friends.map((friend) => (
                <Card key={friend.id}>
                    <CardHeader><h2>My Friend</h2></CardHeader>
                    <CardBody>
                        <CardText><strong>{friend.name}</strong></CardText>
                        <CardText><strong>Age: </strong>{friend.age}</CardText>
                        <CardText><strong>Email: </strong>{friend.email}</CardText>
                    </CardBody>
                </Card>
             ))}    
        </div>
    )
}  

 export default FriendsList;