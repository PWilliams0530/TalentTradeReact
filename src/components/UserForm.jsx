import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UserForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// const UserForm = () => {
//   const [user, setUser] = useState({ name: '', email: '' }); // Initial state
//   const { userId } = useParams(); // Destructure userId from useParams
//   console.log(userId);
//   const userTest = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//     }
//     // Add more users as needed
//   ];

//   // Optional: Fetch user data for editing (replace with your actual API call)
//   // useEffect(() => {
//   //   if (userId) {
//   //     fetch(`"https://randomuser.me/api/?id="${userId}`)
//   //       .then(response => response.json())
//   //       .then(data => setUser(data || {})); // Set to empty object if no data
//   //   }
//   // }, [userId]);

//   const navigate = useNavigate(); // Get the navigate function

//   const handleChange = (event) => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Simulate saving user data (replace with your actual API call)
//     console.log('Saving user:', user);
//     navigate('/users');
//   };

//   return (
//     <div className="container mt-3">
//       <h2>{userId ? 'Edit User' : 'Add User'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           {userId ? 'Save Changes' : 'Add User'}
//         </button>
//       </form>
//     </div>
//   );
// };

export default UserForm;