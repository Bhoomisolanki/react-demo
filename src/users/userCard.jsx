function UserCard({ user }) {
return (
    <>
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
        </div>
    </>
)
}

export default UserCard
