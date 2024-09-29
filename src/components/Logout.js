import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Logout() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleLogout = async () => {
    try {
      await axios.put('http://localhost:8090/loggedout');
      localStorage.removeItem('userDetails');
      localStorage.removeItem('loggedIn');
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmLogout = () => {
    handleClose();
    navigate('/login');
    window.location.reload();
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate('/login');
    };

    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <div className="cont2">
      <h2 className="text-center m-4 heading">Are you sure you want to Logout!?</h2>
      <Button type="submit" className="btn" variant="primary" onClick={handleLogout}>
        Logout!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you have successfully logged out!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirmLogout}>
            Okay!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
