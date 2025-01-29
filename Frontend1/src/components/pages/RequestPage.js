import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import React, { useState } from "react";
import "./RequestPage.css";
import axios from "axios";

const RequestPage = () => {
  const [formData, setFormData] = useState({
    resturantName: "",
    numTables: "",
    numBells: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/request",
        formData
      );
      console.log("Submitted successfully", response.data);

      setMessage("Submitted successfully!");
      setFormData({
        resturantName: "",
        numTables: "",
        numBells: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Failed to submit the form. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="request-page">
        <h1>Be om pris</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Resturant navn:
            <input
              type="text"
              name="resturantName"
              value={formData.resturantName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Antall bord:
            <input
              type="number"
              name="numTables"
              value={formData.numTables}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Antall klokker:
            <input
              type="number"
              name="numBells"
              value={formData.numBells}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fornavn:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Etternavn:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            E-post:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Telefon:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={submitting}>
            Send
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RequestPage;
