import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import AccordionMenu  from './components/AccordionMenu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Wrap your entire application with the Router component
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
                <Header />
          </div>
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
