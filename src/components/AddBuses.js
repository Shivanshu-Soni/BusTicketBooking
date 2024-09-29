
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert';

const AddBusDetails = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formattedDetails = {
        ...values,
        arrival_date: formatDate(values.arrival_date),
        departure_date: formatDate(values.departure_date),
        arrival_time: formatTime(values.arrival_time),
        departure_time: formatTime(values.departure_time),
        prices: Number(values.prices),
      };

      await axios.post('http://localhost:8090/addbuses', formattedDetails);
      Swal({
        icon: 'success',
        title: 'Success!',
        text: 'Bus details added successfully',
        showConfirmButton: false,
        timer: 2000,
      });

      resetForm();
    } catch (error) {
      Swal({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to add bus details',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const formatDate = (dateString) => {
    const dateParts = dateString.split('-');
    const year = dateParts[0].slice(2);
    const month = dateParts[1];
    const day = dateParts[2];
    return `20${year}-${month}-${day}`;
  };

  const formatTime = (timeString) => {
    return `${timeString}:00`;
  };

  const validationSchema = Yup.object().shape({
    arrival_date: Yup.date().min(new Date(), 'Arrival Date should be today or later').required('Arrival Date is required'),
    arrival_time: Yup.string().required('Arrival Time is required'),
    available_seats: Yup.number().integer().min(0, 'Available Seats cannot be negative').required('Available Seats is required'),
    bus_name: Yup.string().min(3,'Bus name must be atleast 3 charecter').required('Bus Name is required'),
    bus_type: Yup.string().min(3,'Bus type name muste be  at least 3 charecter').required('Bus Type is required'),
    departure_date: Yup.date().min(new Date(), 'Departure Date should be today or later').required('Departure Date is required'),
    departure_time: Yup.string().required('Departure Time is required'),
    location_from: Yup.string().min(3,'Location name must at least 3 charecter ').required('Location From is required'),
    location_to: Yup.string().min(3,'Location name must at least 3 charecter').required('Location To is required'),
    prices: Yup.number().min(0, 'Price cannot be negative').required('Price is required'),
    total_seats: Yup.number().integer().min(0, 'Total Seats cannot be negative').required('Total Seats is required'),
  });

  return (
    <Container style={{ paddingTop: '15rem'  }} >
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{backgroundColor: '#ACDDDE' }}>
            <Card.Body>
              <Card.Title>Add Bus Details</Card.Title>
              <Formik
                initialValues={{
                  departure_date: '',
                  arrival_date: '',
                  departure_time: '',
                  arrival_time: '',
                  available_seats: 0,
                  bus_name: '',
                  bus_type: '',
                 
                  location_from: '',
                  location_to: '',
                  prices: 0,
                  total_seats: 0,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                     <div className="form-group">
                      <label htmlFor="departure_date">Departure Date:</label>
                      <Field type="date" name="departure_date" className={`form-control ${errors.departure_date && touched.departure_date ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="departure_date" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="arrival_date">Arrival Date:</label>
                      <Field type="date" name="arrival_date" className={`form-control ${errors.arrival_date && touched.arrival_date ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="arrival_date" component="div" className="invalid-feedback" />
                    </div> 
                    <div className="form-group">
                      <label htmlFor="departure_time">Departure Time:</label>
                      <Field type="time" name="departure_time" className={`form-control ${errors.departure_time && touched.departure_time ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="departure_time" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="arrival_time">Arrival Time:</label>
                      <Field type="time" name="arrival_time" className={`form-control ${errors.arrival_time && touched.arrival_time ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="arrival_time" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="available_seats">Available Seats:</label>
                      <Field type="number" name="available_seats" className={`form-control ${errors.available_seats && touched.available_seats ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="available_seats" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bus_name">Bus Name:</label>
                      <Field type="text" name="bus_name" className={`form-control ${errors.bus_name && touched.bus_name ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="bus_name" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bus_type">Bus Type:</label>
                      <Field type="text" name="bus_type" className={`form-control ${errors.bus_type && touched.bus_type ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="bus_type" component="div" className="invalid-feedback" />
                    </div>
                   
                   
                    <div className="form-group">
                      <label htmlFor="location_from">Location From:</label>
                      <Field type="text" name="location_from" className={`form-control ${errors.location_from && touched.location_from ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="location_from" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location_to">Location To:</label>
                      <Field type="text" name="location_to" className={`form-control ${errors.location_to && touched.location_to ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="location_to" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="prices">Price:</label>
                      <Field type="number" name="prices" className={`form-control ${errors.prices && touched.prices ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="prices" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="total_seats">Total Seats:</label>
                      <Field type="number" name="total_seats" className={`form-control ${errors.total_seats && touched.total_seats ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="total_seats" component="div" className="invalid-feedback" />
                    </div>
                    <Button variant="primary" type="submit" className='mt-3'>
                      Add Bus Details
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBusDetails;

