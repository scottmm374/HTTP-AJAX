import React from 'react';
import axios from 'axios';
import React, { Component } from 'react';

export default class FriendDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        };
    }

    componentDidMount () {
        const id= this.props.match.params.id;
        this.fetchFriends(id);
    }

    fetchFriends = id = {
        axios
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(responce => {
                this,setState(() => ({ friend: responce.data }));
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        if (!this.state.friend) {
            return <div>Loading Friends List...</div>;  
        }
    }
    
}
