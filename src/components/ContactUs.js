import React, { useState } from "react";
// import Footer from "../Footer";

function ContactUs() {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      // Form is valid, submit or perform desired actions
      console.log("Form submitted");
      setFormErrors({});
    } else {
      // Form is invalid, update UI or display error messages
      console.log("Form validation failed");
      form.classList.add("was-validated");
      setFormErrors(getFormErrors(form));
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
      general: "",
    }));
    if (
      id === "phoneNumber" &&
      !/^(\+\d{1,3}\s?)?(\(\d{1,3}\))?[\s.-]?\d{1,3}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/.test(
        value
      )
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "Invalid phone number",
      }));
    }
    if (
      id === "email" &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "Invalid email address",
      }));
    }
  };

  const getFormErrors = (form) => {
    const errors = {};
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++) {
      if (!elements[i].checkValidity()) {
        errors[elements[i].id] = elements[i].validationMessage;
      }
    }
    return errors;
  };

  return (
    <>
      <div className="" style={{padding:"10rem"}}>
        {/* <Navigationbar /> */}
        <div
          style={{
            maxWidth: 1000,
            margin: "auto",
            padding: 5,
            backgroundColor: "aliceblue",
            borderRadius: 5,
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
            // marginTop: 25,
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div className="p-3">
              <h1>Contact Us</h1>
              {formErrors.general && (
                <p style={{ color: "red" }}>{formErrors.general}</p>
              )}
              <hr />
              <form onSubmit={handleSubmit} noValidate>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="First Name..."
                    className="form-control mb-2 me-2"
                    id="name1"
                    required
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Last Name..."
                    className="form-control mb-2 ms-2"
                    id="name2"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  {formErrors.name1 && (
                    <p style={{ color: "red" }}>{formErrors.name1}</p>
                  )}
                  {formErrors.name2 && (
                    <p style={{ color: "red" }}>{formErrors.name2}</p>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Phone Number..."
                  className="form-control mb-2"
                  id="phoneNumber"
                  required
                  onChange={handleInputChange}
                />
                {formErrors.phoneNumber && (
                  <p style={{ color: "red" }}>{formErrors.phoneNumber}</p>
                )}
                <input
                  type="email"
                  placeholder="Email..."
                  className="form-control mb-2"
                  id="email"
                  required
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                )}
                <textarea
                  className="form-control mb-2"
                  placeholder="Enter your queries here..."
                  name="query"
                  id="query"
                  cols={30}
                  rows={5}
                  required
                  onChange={handleInputChange}
                />
                {formErrors.query && (
                  <p style={{ color: "red" }}>{formErrors.query}</p>
                )}
                <br />
                <input
                  type="submit"
                  value="Submit"
                  className="btn w-100 mb-5"
                  style={{ backgroundColor: "#3198c1" }}
                />
              </form>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default ContactUs;
