import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('userDetails');
      localStorage.removeItem('loggedIn');
      navigate('/login');
    };
  return (
    <div className="container mt-4" style={{padding:"12rem"}}>
      <h2 className="text-center mb-4">Welcome to the Admin Dashboard!</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Bus List</Card.Title>
              <Card.Text>View the list of buses.</Card.Text>
              <Link to="/getbuses">
                <Button variant="primary">Go to Bus List</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>User List</Card.Title>
              <Card.Text>View the list of users.</Card.Text>
              <Link to="/getallusers">
                <Button variant="primary">Go to User List</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Add Bus</Card.Title>
              <Card.Text>Add a new bus to the system.</Card.Text>
              <Link to="/addbuses">
                <Button variant="primary">Add Bus</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Log-out</Card.Title>
              <Card.Text>Click here to logout.</Card.Text>
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card> 
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
