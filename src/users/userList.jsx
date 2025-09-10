import UserCard from './userCard.jsx';
import SaveUser from './saveUser.jsx';
import React from 'react';


function UserList() {
  const [users, setUsers] = React.useState([
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
  ]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [receivedUser, setReceivedUser] = React.useState(null);
  const [editUser, setEditUser] = React.useState(null);

const saveNewUser = (user) => {
    user.id = users.length + 1;
    setReceivedUser(user);
    setUsers(prevUsers => [...prevUsers, user]);
    setReceivedUser(null);
};
const updateUser = (user) => {
    setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? user : u));
    setEditUser(null);
};
function handleUserClick(user) {
    setSelectedUser(user);
}
function handleEditUser(user) {
    setEditUser(user);
}
function handleDeleteClick(userId) {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    if (selectedUser && selectedUser.id === userId) {
        setSelectedUser(null);
    }
    if (editUser && editUser.id === userId) {
        setEditUser(null);
    }
}

return (
    <>
        <style>
            {`
                .btn {
                    display: inline-block;
                    padding: 6px 16px;
                    margin-right: 8px;
                    font-size: 14px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    text-decoration: none;
                    color: #fff;
                    transition: background 0.2s;
                }
                .btn-primary {
                    background: #007bff;
                }
                .btn-primary:hover {
                    background: #0056b3;
                }
                .btn-secondary {
                    background: #6c757d;
                }
                .btn-secondary:hover {
                    background: #495057;
                }
                .btn-danger {
                    background: #dc3545;
                }
                .btn-danger:hover {
                    background: #a71d2a;
                }
            `}
        </style>
        <h1>Users</h1>
        <SaveUser
            onSaveUser={user => {
                saveNewUser(user);
            }}
            user={null}
        />
        <hr />
        {editUser !== null && (
            <SaveUser
                onSaveUser={user => {
                    updateUser(user);
                }}
                user={editUser}
            />
        )}
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Age</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} >
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.age}</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                            <a onClick={() => handleEditUser(user)} className='btn btn-primary'>Edit</a>
                            <a onClick={() => handleUserClick(user)} className='btn btn-secondary'>View</a>
                            <a onClick={() => handleDeleteClick(user.id)} className='btn btn-danger'>Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {selectedUser && <UserCard user={selectedUser} />}
    </>
)
}

export default UserList
