import UserCard from './userCard.jsx'
import React from 'react';


function UserList() {
  const users =  [
  { id: 1, name: "Aarav Sharma", age: 22 },
  { id: 2, name: "Priya Patel", age: 25 },
  { id: 3, name: "Rohan Verma", age: 28 },
  { id: 4, name: "Neha Singh", age: 21 },
  { id: 5, name: "Karan Mehta", age: 30 },
  { id: 6, name: "Ishita Desai", age: 24 },
  { id: 7, name: "Vikram Nair", age: 27 },
  { id: 8, name: "Simran Kaur", age: 23 },
  { id: 9, name: "Arjun Gupta", age: 26 },
  { id: 10, name: "Meera Joshi", age: 29 }
];
const [selectedUser, setSelectedUser] = React.useState(null);

function handleUserClick(user) {
    setSelectedUser(user);
}

return (
    <>
        <h1>Users</h1>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} >
                        <td onClick={() => handleUserClick(user)} style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
                        <td onClick={() => handleUserClick(user)} style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
                        <td onClick={() => handleUserClick(user)} style={{ border: "1px solid #ccc", padding: "8px" }}>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {selectedUser && <UserCard user={selectedUser} />}
    </>
)
}

export default UserList
