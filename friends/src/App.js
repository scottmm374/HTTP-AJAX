import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FriendsForm from './components/FriendsForm';
import FriendDetails from './components/FriendDetails';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <div>
        <FriendDetails />
        </div>
        
      <div>
      <FriendsForm />
      </div>
       
      
    </div>
  );
}

export default App;
