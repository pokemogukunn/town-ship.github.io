import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebaseConfig';

const ResourceExchange = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [resource, setResource] = useState('');

  useEffect(() => {
    firestore.collection('users').get()
      .then(querySnapshot => {
        const usersData = [];
        querySnapshot.forEach(doc => {
          usersData.push({ id: doc.id, ...doc.data() });
        });
        setUsers(usersData);
      });
  }, []);

  const sendResource = () => {
    if (selectedUser) {
      firestore.collection('users').doc(selectedUser.id).update({
        resources: firebase.firestore.FieldValue.arrayUnion(resource)
      })
      .then(() => {
        console.log('Resource sent');
      })
      .catch(error => {
        console.error('Error sending resource:', error);
      });
    }
  };

  return (
    <div>
      <h2>Resource Exchange</h2>
      <select onChange={(e) => setSelectedUser(users.find(user => user.id === e.target.value))}>
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <input type="text" value={resource} onChange={(e) => setResource(e.target.value)} placeholder="Resource" />
      <button onClick={sendResource}>Send Resource</button>
    </div>
  );
};

export default ResourceExchange;
