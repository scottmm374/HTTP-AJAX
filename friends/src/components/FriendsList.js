
import React from 'react';
import { Link } from 'react-router-dom';




export default FriendsList(props)  {
        return (
            <div className="friends-card">
                {props.savedFriends.map((friend => {
                    <Link to={`/home/${friend.id}`} key={friend.id}>
                        <p>{ friend.name }</p>
                        <p>{ friend.age }</p>
                        <p>{ friend.email }</p>
                    </Link>
                ))}}
                
                
             
            </div>
        )

    }

 