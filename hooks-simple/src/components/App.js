import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
const App = () => {
  console.log(useState);
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('Posts')}>Post</button>
        <button onClick={() => setResource('Todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
