
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
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        if (!this.state.friend) {
            return <div>Loading Friends List...</div>;  
        }
        console.log(this.props.match.params.id);
        const { name, age, email } = this.state.friend;
        return (
            <div className="container">
                <div className="friend-card">
                    <h2>{ name }</h2>
                    <div className="friend-age">
                        Age: { age }
                    </div>
                    <div className="email">
                        Email: { email }
                    </div>
                </div>
                
                    ))}
            </div>
        );
    }

}
