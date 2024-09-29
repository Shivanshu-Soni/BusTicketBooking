import axios from 'axios';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';

export default function SignupPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3,'Name must be at least 3 charecters').max(20,'Name not greater than 12 charecters').required('Name is required'),
    username: Yup.string().min(3,'Username must be at least 3 charecters ').max(12,'Username not greater than 12 charecters').required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6,'Password must be at least 6 characters').max(12,'Password not greater 12 charecters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const result = await axios.get('http://localhost:8090/getallusers');
      const duplicateUser = result.data.find((element) => element.username === values.username);
      if (duplicateUser) {
        setShow2(true);
      } else {
        setShow1(true);
        await axios.post('http://localhost:8090/signup', values);
        // navigate("/login");
      }
    },
  });

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const handleClose = () => {
    setShow1(false);
    navigate('/login');
    // window.location.reload();
  };

  const handleClose2 = () => {
    setShow2(false);
    // navigate("/signup");
    window.location.reload();
  };

  return (
    <div className="cont1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 heading">Register!</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label ll">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formik.errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label ll">
                  Username
                </label>
                <input
                  type="text"
                  className={`form-control ${formik.errors.username ? 'is-invalid' : ''}`}
                  placeholder="Enter your username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username && (
                  <div className="invalid-feedback">{formik.errors.username}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label ll">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email id"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label ll">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="invalid-feedback">{formik.errors.password}</div>
                )}
              </div>
              <Button type="submit" className="btn" variant="primary">
                Submit!
              </Button>
              <Modal show={show1}>
                <Modal.Header closeButton>
                  <Modal.Title>SignUp!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you have successfully Signed Up!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Okay!!!!
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal show={show2}>
                <Modal.Header closeButton>
                  <Modal.Title>SignUp!</Modal.Title>
                </Modal.Header>
                <Modal.Body>OOPS! Duplicate username! Please try with another username!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Okay!!
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
