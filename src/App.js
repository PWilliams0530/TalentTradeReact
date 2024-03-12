import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import { useAuth } from './contexts/authContext';

// Wrap your entire application with the Router component
function App() {

  //const { isLoggedIn, logout } = useAuth();

  return (
    <Router>
      <div className="App">
        <div className="container">
        <NavigationBar/>
          <Routes>
            <Route path="/" element={<></>} /> {/* Blank page for root URL */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId/edit" element={<UserForm />} />
            {/* Add more routes for other components as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
