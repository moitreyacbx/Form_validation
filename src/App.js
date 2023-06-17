import React, { useState } from "react";
import Result from "./Result";
import "./App.css";
import Alert from "./Alert";

const App = () => {
  const [notification, setNotification] = useState(null);
  const showNotification = (message, type) => {
    setNotification({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setNotification(null);
    }, 1500);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
      showNotification("Please enter a valid name", "danger");
    } else if (!formData.email || !emailRegex.test(formData.email)) {
      showNotification("Please enter a valid email address", "danger");
    } else if (
      !formData.phoneNumber ||
      !phoneNumberRegex.test(formData.phoneNumber)
    ) {
      showNotification("Please enter a valid phone number", "danger");
    } else {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <Alert alert={notification} />
      <div className="main d-flex">
        <div className="p">
          <h1>Form Validation</h1>
          <div className="parent d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <br />
                <input
                  className="input"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field text-center">
                <button className="btn btn-danger" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {isSubmitted && (
          <div className="p">
            <Result formData={formData} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
