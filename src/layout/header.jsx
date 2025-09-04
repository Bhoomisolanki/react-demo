function Header() {
 
return (
    <>
    <nav style={{ display: "flex", alignItems: "center", padding: "1rem", background: "#282c34" }}>
        <h1 style={{ color: "#fff", margin: 0, fontSize: "1.5rem" }}>React Demo</h1>
        <ul style={{ display: "flex", listStyle: "none", marginLeft: "2rem", padding: 0 }}>
            <li style={{ marginRight: "1.5rem" }}>
                <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
            </li> 
            <li style={{ marginRight: "1.5rem" }}>
                <a href="/users/userList" style={{ color: "#fff", textDecoration: "none" }}>Users</a>
            </li>           
        </ul>
    </nav>
    </>
)
}

export default Header
