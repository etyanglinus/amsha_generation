import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link for navigation
import Image from 'next/image'; // Example of how to include Next.js Image

const SignUpForm = () => {
  const [credentials, setCredentials] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    university: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!credentials.fullName) newErrors.fullName = 'Full Name is required';
    if (!credentials.email) newErrors.email = 'Email is required';
    if (!credentials.password || credentials.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters long';
    if (!credentials.phone) newErrors.phone = 'Phone Number is required';
    if (!credentials.university) newErrors.university = 'University is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true); // Start submitting
      console.log(credentials);
      // Simulating async registration logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false); // End submitting
      // After successful registration, redirect to dashboard or show success message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={credentials.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={errors.fullName ? 'error-input' : ''}
              aria-describedby={errors.fullName ? 'fullNameError' : null}
              disabled={isSubmitting}
            />
            {errors.fullName && <p id="fullNameError" className="error">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={errors.email ? 'error-input' : ''}
              aria-describedby={errors.email ? 'emailError' : null}
              disabled={isSubmitting}
            />
            {errors.email && <p id="emailError" className="error">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={errors.password ? 'error-input' : ''}
              aria-describedby={errors.password ? 'passwordError' : null}
              disabled={isSubmitting}
            />
            {errors.password && <p id="passwordError" className="error">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="phone">Phone Number (for M-Pesa)</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={credentials.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className={errors.phone ? 'error-input' : ''}
              aria-describedby={errors.phone ? 'phoneError' : null}
              disabled={isSubmitting}
            />
            {errors.phone && <p id="phoneError" className="error">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="university">University</label>
            <input
              type="text"
              name="university"
              id="university"
              value={credentials.university}
              onChange={handleChange}
              placeholder="University"
              required
              className={errors.university ? 'error-input' : ''}
              aria-describedby={errors.university ? 'universityError' : null}
              disabled={isSubmitting}
            />
            {errors.university && <p id="universityError" className="error">{errors.university}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
          <p>
            Already have an account? <Link href="/login"><a>Login here</a></Link>
          </p>
        </form>
      </div>

      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f4f4;
        }

        .signup-form {
          width: 100%;
          max-width: 400px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          font-family: 'Poppins', sans-serif;
          color: #333;
        }

        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-sizing: border-box;
          font-size: 16px;
        }

        .error {
          color: red;
          font-size: 12px;
          margin-top: -8px;
        }

        button {
          width: 100%;
          background-color: #0070f3;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #005bb5;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        p {
          text-align: center;
          margin-top: 15px;
          font-family: 'Poppins', sans-serif;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .error-input {
          border-color: red;
        }
      `}</style>
    </div>
  );
};

export default SignUpForm;
