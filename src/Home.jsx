import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Home() {
const [showWelcome, setShowWelcome] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
}, []);

return (
    <>
        <h1>Home</h1>
        {showWelcome ? (
            <p>Welcome to the Home Page!</p>
        ) : (
            <p>Switch to <Link to="/users">User</Link> tab</p>
        )}
    </>
)
}

export default Home