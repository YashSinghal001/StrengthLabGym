import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.class) {
      newErrors.class = 'Please select a class';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // You can add AJAX call here to submit the form data
    }
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-md-6 g-3">
          <img src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" alt="Gym Interior" className="gym-image" />
        </div>
        <div className="col-md-6 g-3">
          <div className="form-container">
            <h1 className="mb-4">ASK US ANYTHING</h1>
            <p>If you have any query related, we are available. Fill out the form and we'll get back to you!</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3 position-relative">
                <label htmlFor="name" className="form-label">Name*</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">Email*</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="class" className="form-label">Class*</label>
                <select
                  className={`form-select ${errors.class ? 'is-invalid' : ''}`}
                  id="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a class</option>
                  <option value="yoga">Yoga</option>
                  <option value="pilates">Pilates</option>
                  <option value="spinning">Spinning</option>
                  <option value="weightlifting">Weightlifting</option>
                  <option value="zumba">Zumba</option>
                </select>
                {errors.class && <div className="invalid-feedback">{errors.class}</div>}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button type="submit" className="btn-56">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}