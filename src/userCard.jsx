function UserCard(user) {
    console.log(user);

return (
    <>
        <div className="user-card">
            <h2>{user.user.name}</h2>
            <p>Age: {user.user.age}</p>
        </div>
    </>
)
}

export default UserCard
