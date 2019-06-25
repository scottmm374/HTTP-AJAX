import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import FriendDetails from './FriendDetails';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount () {
        axios
        .get('http://localhost:5000/friends')
        .then(responce => {
            this.setState(() => ({friends: responce.data }));
        })
        .catch(error => {
            console.error('Server Error', error);
        });

    }

    render () {
        console.log("Friendslist", this.props)
        return (
            <div>
                {this.state.friends.map(friend => {
                    <FriendDetails key={friend.id} friend={friend}/>
             ))}
            </div>
        );
    }
}