import React, { Component, Route } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
      this.state = {
        savedFriends: []
    };
  }
    componentDidMount() {
      axios.get('http://localhost:5000/friends')
        .then(res => { this.setState({  savedFriends: res.data }) })
        .catch(err => { console.log('Error', err) })
    }

    addFriend = newFriend => {
      axios
        .post('http://localhost:5000/friends', newFriend)
        .then((res => { this.setState({ savedFriends: res.data });
           this.props.history.push('/'); 
          }))
        .catch((err => { console.log("err", err); }));
    };

    updateFriend = friendInfo => {
      axios
      .put(`http://localhost:5000/friends'/${friendInfo.id}`, friendInfo)
      .then(res => { this.setState({ savedFriends: res.data});
        this.props.history.push('/friend-list');
      })
      .catch(err => { console.log(err) })
    }

    deleteFriend = (event, friend) => {
      event.preventDefault();
      axios
        .delete(`http://localhost:5000/friends'/${friend.id}`)
        .then(res => { this.setState({ savedFriends: res.data });
        this.props.history.push('/');
       })
       .catch(err => console.log(err));
    };

  render () {
    return (
      <div className="App">
        <Route exact path="/" render={props => (
        <FriendsList  {...props} savedFriends={ this.state.savedFriends } />
        )} />
         
        <FriendsForm  addFriend={this.addFriend} /> 
        </div>
      
       

    
    
    )}

}


