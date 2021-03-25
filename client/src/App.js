import React, { useState } from 'react';
import {ApolloProvider} from '@apollo/react-hooks'
import client from './graphql/client'
import { getLoggedInUser, logout } from './auth';
import Chat from './Chat';
import Login from './Login';
import NavBar from './NavBar';

function App (){
  const [user,setUser] = useState(getLoggedInUser())
  // state = {user: getLoggedInUser()};

  const handleLogin = (user) => setUser(user);

  const  handleLogout =() => {
    logout();
    setUser(null);
  }

  
    if (!user) {
      return <Login onLogin={handleLogin} />;
    }
    return (
      <ApolloProvider client={client}>
      <div>
        <NavBar onLogout={handleLogout} />
        <Chat user={user} />
      </div>
      </ApolloProvider>
    );  
  }


export default App;
