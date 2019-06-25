import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsList extends Component {
    console.log('FriendsList', props)
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
        return (
            <div>
                {this.state.friends.map(friend => {
                    <FriendDetails key={friend.id} friend={friend}/>
             ))}
            </div>
        );
    }
}