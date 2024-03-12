import React from 'react';

function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <form onSubmit={handleLogin}>
            {/* Login form fields */}
            <button type="submit">Login</button>
        </form>
    );
}