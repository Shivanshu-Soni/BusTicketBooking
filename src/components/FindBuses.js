import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FindBuses() {
  let navigate = useNavigate();
  const [bus_route, setBus] = useState([]);
  const [fetch_buses, fetchBus] = useState([]);
  const [findbus, setfindBus] = useState(false);

  let date = new Date();
  let today_time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  let today_date = new Date().toISOString().slice(0, 10);

  const busesfrom = [
    { label: 'Pune', value: 'Pune' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'nashik', value: 'nashik' },
    { label: 'sangli', value: 'sangli' },
    { label: 'kolhapur', value: 'kolhapur' },
    { label: 'nagar', value: 'nagar' },
    { label: 'aurangabad', value: 'aurangabad' },
    { label: 'jalana', value: 'jalana' },
    { label: 'beed', value: 'beed' },
    { label: 'ooty', value: 'ooty' },
    { label: 'mysore', value: 'mysore' },
    { label: 'Bhopal', value: 'Bhoapal' },
    { label: 'Indore', value: 'Indore' },
    { label: 'Jabalpur', value: 'Jabalpur' },
  ];
  const busesto = [
    { label: 'Pune', value: 'Pune' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'nashik', value: 'nashik' },
    { label: 'sangli', value: 'sangli' },
    { label: 'kolhapur', value: 'kolhapur' },
    { label: 'nagar', value: 'nagar' },
    { label: 'aurangabad', value: 'aurangabad' },
    { label: 'jalana', value: 'jalana' },
    { label: 'beed', value: 'beed' },
    { label: 'ooty', value: 'ooty' },
    { label: 'mysore', value: 'mysore' },
    { label: 'Bhopal', value: 'Bhopal' },
    { label: 'Indore', value: 'Indore' },
    { label: 'Jabalpur', value: 'Jabalpur' }
  ];

  const validationSchema = Yup.object({
    location_from: Yup.object().required('From field is required'),
    location_to: Yup.object().required('To field is required'),
  });

  const getBuses = async (values) => {
    await axios
      .get('http://localhost:8090/getbuses')
      .then((response) => {
        const buses = response.data;
        const filteredBuses = buses.filter(
          (element) =>
            element.location_from === values.location_from.value &&
            element.location_to === values.location_to.value
        );
        fetchBus(filteredBuses);
        setfindBus(true);
      })
      .catch((error) => {
        console.error('Error fetching buses:', error);
      });
  };

  return (
    <div className="contfromto">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 heading">Plan your Journey!</h2>
          <Formik
            initialValues={{ location_from: '', location_to: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              getBuses(values);
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="location_from" className="form-label ll">
                    From:
                  </label>
                  <Select
                    name="location_from"
                    options={busesfrom}
                    value={values.location_from}
                    onChange={(option) => setFieldValue('location_from', option)}
                  />
                  <ErrorMessage name="location_from" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="location_to" className="form-label ll">
                    To:
                  </label>
                  <Select
                    name="location_to"
                    options={busesto}
                    value={values.location_to}
                    onChange={(option) => setFieldValue('location_to', option)}
                  />
                  <ErrorMessage name="location_to" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Find Buses
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {findbus && (
        <div className="container">
          <div className="py-4">
            <table className="table border shadow t2">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Bus Name</th>
                  <th scope="col">Bus Type</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Dep Date</th>
                  <th scope="col">Total seats</th>
                  <th scope="col">Available Seats</th>
                  <th scope="col">Price of Ticket</th>
                  <th scope="col">Book Tickets</th>
                </tr>
              </thead>
              <tbody>
                {fetch_buses.map((bus, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{bus.bus_name}</td>
                    <td>{bus.bus_type}</td>
                    <td>{bus.location_from}</td>
                    <td>{bus.location_to}</td>
                    <td>{bus.departure_date}</td>
                    <td>{bus.total_seats}</td>
                    <td>{bus.available_seats}</td>
                    <td>{bus.prices}</td>
                    {bus.available_seats > 0 ? (
                      <td>
                        <button
                          type="submit"
                          className="btn3 btn-outline-danger"
                          onClick={(e) =>
                            navigate('/addpassengers', {
                              state: {
                                busid: bus.id,
                                price: bus.prices,
                                bus_name: bus.bus_name,
                                location_from: bus.location_from,
                                location_to: bus.location_to,
                                departure_date: bus.departure_date,
                                departure_time: bus.departure_time,
                                arrival_time: bus.arrival_time,
                              },
                            })
                          }
                        >
                          Book Tickets
                        </button>
                      </td>
                    ) : (
                      <td>
                        <h6>No seats available.</h6>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}



