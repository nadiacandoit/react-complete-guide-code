import React, { useState } from 'react';

import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
 
  const [usersList, setUsersLists] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersLists((prevList) => 
    {
      return [...prevList, {name: uName, age: uAge, id: Math.random()}];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
