import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'; // Make sure to create this CSS module

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server.
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.introText}>
        If you have any questions or need further information, feel free to reach out to us.
      </p>

      {!formSubmitted ? (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textArea}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      ) : (
        <div className={styles.thankYouMessage}>
          <h2>Thank you for reaching out!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      )}

      <div className={styles.supportSection}>
        <h2>Support</h2>
        <p>
          If you need help, check our{' '}
          <a href="/faq" className={styles.supportLink}>
            FAQ page
          </a>{' '}
          or contact support.
        </p>
      </div>

      <div className={styles.officeInfo}>
        <h2>Office Information</h2>
        <p>
          <strong>Location:</strong> 123 Finance St, Nairobi, Kenya
        </p>
        <p>
          <strong>Office Hours:</strong>
        </p>
        <ul className={styles.officeHours}>
          <li>Monday - Friday: 9 AM - 5 PM</li>
          <li>Saturday: 10 AM - 2 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
