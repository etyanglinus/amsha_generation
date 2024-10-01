import React, { useState } from 'react';

const SignUpForm = () => {
  const [credentials, setCredentials] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    university: '',
  });

  const [errors, setErrors] = useState({});

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
      console.log(credentials);
      // Handle registration logic
      // After successful registration, redirect to dashboard or show success message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={credentials.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <input
            type="tel"
            name="phone"
            value={credentials.phone}
            onChange={handleChange}
            placeholder="Phone Number (for M-Pesa)"
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="text"
            name="university"
            value={credentials.university}
            onChange={handleChange}
            placeholder="University"
            required
          />
          {errors.university && <p className="error">{errors.university}</p>}

          <button type="submit">Create Account</button>
          <p>
            Already have an account? <a href="/login">Login here</a>
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
      `}</style>
    </div>
  );
};

export default SignUpForm;
