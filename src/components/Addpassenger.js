import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert';

function AddPassenger({ loggedinuser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const today = new Date().toISOString().slice(0, 10);

  const [passenger, setPassenger] = useState({
    aadhar: '',
    bookingDate: today,
    cancelStat: '',
    dob: '',
    name: '',
    username: loggedinuser,
    contact: '',
    journeyStat: '',
    bus_name: location.state.bus_name,
    location_from: location.state.location_from,
    location_to: location.state.location_to,
    departure_date: location.state.departure_date,
    departure_time: location.state.departure_time,
    arrival_time: location.state.arrival_time,
    busid: location.state.busid,
  });

  const [passengerData, setPassengerData] = useState([]);
  const [count, setCount] = useState(0);

  const { aadhar, bookingDate, cancelStat, dob, name, username, contact, journeyStat } = passenger;

  const onInputChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const addPassenger = (values, { resetForm }) => {
    const newPassenger = {
      ...values,
      username: loggedinuser,
      bookingDate: today,
      bus_name: location.state.bus_name,
      location_from: location.state.location_from,
      location_to: location.state.location_to,
      departure_date: location.state.departure_date,
      departure_time: location.state.departure_time,
      arrival_time: location.state.arrival_time,
      busid: location.state.busid,
    };
    setPassengerData((prevData) => [...prevData, newPassenger]);
    setCount((prevCount) => prevCount + 1);
    Swal('Passenger Added!', 'Passenger has been successfully added.', 'success');
    resetForm();
  };

    const paymentclickhandler = (e) => {
        navigate("/makepayment", { state: { bus_id: location.state.busid, number: count, price: location.state.price, passengerdata: passengerData } });
    }

  return (
    <div className="cont2" >
      <div className="card w-50 mx-auto mt-5 mb-5">
        <div className="card-header">Add Passenger {count + 1}</div>
        <div className="card-body">
          <Formik
            initialValues={{
              aadhar: '',
              dob: '',
              name: '',
              contact: '',
            }}
            validationSchema={Yup.object({
                aadhar: Yup.string()
                  .matches(/^\d{16}$/, 'Aadhar Number must be a 16-digit number')
                  .required('Aadhar Number is required'),
                dob: Yup.string().required('Date of Birth is required'),
                name: Yup.string().required('Name of Passenger is required'),
                contact: Yup.string()
                  .matches(/^\d{10}$/, 'Contact Number must be a 10-digit number')
                  .required('Contact Number is required'),
              })}
            onSubmit={addPassenger}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="aadhar" className="form-label">
                  Aadhar Number
                </label>
                <Field type="text" className="form-control" id="aadhar" name="aadhar" />
                <ErrorMessage name="aadhar" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <Field type="date" className="form-control" id="dob" name="dob" />
                <ErrorMessage name="dob" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name of Passenger
                </label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact Number
                </label>
                <Field type="text" className="form-control" id="contact" name="contact" />
                <ErrorMessage name="contact" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-secondary">
                Add Passenger
              </button>
            </Form>
          </Formik>
        </div>
        <div className="card-footer">
        <button type="button" className="btn btn-outline-primary" onClick={(e) => paymentclickhandler(e)}>Make Payment</button>
        </div>
      </div>
    </div>
  );
}

export default AddPassenger;





