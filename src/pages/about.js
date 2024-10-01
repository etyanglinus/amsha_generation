import { useState } from 'react';
import styles from './About.module.css'; // Ensure this file exists

const teamMembers = [
  {
    name: 'Samwel Kodilu',
    role: 'Founder and CEO',
    bio: 'Samwel is passionate about financial literacy and empowering students to save.',
    linkedin: 'https://linkedin.com/in/samwelkodilu',
  },
  {
    name: 'Jane Doe',
    role: 'Chief Technology Officer',
    bio: 'Jane leads our tech initiatives and ensures our platform is user-friendly.',
    linkedin: 'https://linkedin.com/in/janedoe',
  },
  {
    name: 'John Smith', // Changed name and role for distinction
    role: 'Chief Financial Officer',
    bio: 'John manages our finances and ensures sustainability in our initiatives.',
    linkedin: 'https://linkedin.com/in/johnsmith',
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <p className="text-lg text-center mb-8">
        Welcome to Amsha Generation. We are dedicated to empowering students to save for a secure financial future.
      </p>

      {/* Team Section */}
      <section className={`team-introduction py-12 ${styles.teamSection}`}>
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className={`team-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${styles.teamCards}`}>
          {teamMembers.map((member) => (
            <div key={member.name} className={`team-card bg-white shadow-md rounded-lg p-6 ${styles.teamCard}`}>
              <h3 className="font-bold text-2xl mb-2 text-center">{member.name}</h3>
              <p className="text-center mb-2 text-gray-700">{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-center block mb-4"
                >
                  LinkedIn
                </a>
              )}
              <div className="bio text-center text-gray-600">
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition py-12">
        <div className={`statement-container bg-royalblue text-white rounded-lg p-8 mb-8 ${styles.statementContainer}`}>
          <h2 className="text-3xl font-bold text-center mb-4">Vision Statement</h2>
          <p className="text-lg text-center">
            "To build a financially secure future for every young adult in Kenya, empowering generations through smart savings and financial literacy."
          </p>
        </div>

        <div className={`statement-container bg-royalblue text-white rounded-lg p-8 ${styles.statementContainer}`}>
          <h2 className="text-3xl font-bold text-center mb-4">Mission Statement</h2>
          <p className="text-lg text-center">
            "Amsha Generation is dedicated to enabling students to start saving early, providing them with the tools and financial knowledge necessary to create a stable and prosperous future as they transition from education to their professional lives."
          </p>
        </div>
      </section>

      {/* Additional Styles */}
      <style jsx>{`
        .team-introduction {
          background-color: #f9f9f9; /* Light gray background */
        }

        .team-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .team-cards {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
          }
        }

        @media (min-width: 1024px) {
          .team-cards {
            grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
          }
        }

        .team-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Card shadow */
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px); /* Slight lift on hover */
        }

        .bio {
          font-size: 0.875rem;
          color: #555;
          margin-top: 1rem;
        }

        .bg-royalblue {
          background-color: royalblue; /* Royal blue background for vision/mission */
        }

        .statement-container {
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .text-white {
          color: white;
        }

        .rounded-lg {
          border-radius: 15px;
        }

        .p-8 {
          padding: 2rem;
        }

        .text-center {
          text-align: center;
        }

        .text-4xl {
          font-size: 2.25rem;
        }

        .font-bold {
          font-weight: bold;
        }

        .mb-8 {
          margin-bottom: 2rem;
        }

        .py-12 {
          padding: 3rem 0;
        }

        .text-lg {
          font-size: 1.125rem;
        }

        .text-2xl {
          font-size: 1.5rem;
        }

        .text-blue-500 {
          color: #3b82f6;
        }

        .text-gray-700 {
          color: #4a5568;
        }

        .text-gray-600 {
          color: #718096;
        }
      `}</style>
    </div>
  );
};

export default About;
