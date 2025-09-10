import { NavLink } from "react-router-dom";



function Header() {
 
return (
    <>
    <nav style={{ display: "flex", alignItems: "center", padding: "1rem", background: "#282c34" }}>
        <h1 style={{ color: "#fff", margin: 0, fontSize: "1.5rem" }}>React Demo</h1>
        <ul style={{ display: "flex", listStyle: "none", marginLeft: "2rem", padding: 0 }}>
            <li style={{ marginRight: "1.5rem" }}>
                <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</NavLink>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
               <NavLink to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</NavLink>
            </li>
            <li>
                <NavLink to="/users" style={{ color: "#fff", textDecoration: "none" }}>Users</NavLink>
            </li>
        </ul>
    </nav>
    </>
)
}

export default Header
