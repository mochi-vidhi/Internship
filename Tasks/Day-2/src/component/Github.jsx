import React, { useState } from 'react';

function Github() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(json => setUser(json))
      .catch(error => console.error('Error fetching user:', error));
  };

  return (
    <div>
      <h2>Search GitHub User</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>{user.name || 'N/A'}</td>
              <td>{user.company || 'N/A'}</td>
              <td>{user.location || 'N/A'}</td>
            </tr>

           
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Github;
