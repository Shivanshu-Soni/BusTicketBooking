import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

export default function AdminLogin() {
  const navigate = useNavigate();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    setShow1(false);
    navigate('/adminDashboard');
    window.location.reload();
  };

  const handleClose2 = () => {
    setShow2(false);
    navigate('/login');
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (values.username === 'admin' && values.password === 'admin') {
      // Set user details and loggedIn status in localStorage
      localStorage.setItem('userDetails', JSON.stringify(values));
      localStorage.setItem('loggedIn', true);

      setShow1(true);
    } else {
      setShow2(true);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <div className="contlog">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 heading">Admin Login!</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label ll">
                    Username
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label ll">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <Button type="submit" className="btn" variant="primary">
                  Login!
                </Button>
              </Form>
            </Formik>
            <Modal show={show1}>
              <Modal.Header closeButton>
                <Modal.Title>Login!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you have successfully Logged in!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Okay!!!!
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={show2}>
              <Modal.Header closeButton>
                <Modal.Title>Login!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                OOPS! You have entered the wrong username or password!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                  Okay!!
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
