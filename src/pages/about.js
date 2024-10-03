import styles from '../styles/About.module.css'; // Ensure this file exists

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
    name: 'John Smith',
    role: 'Chief Financial Officer',
    bio: 'John manages our finances and ensures sustainability in our initiatives.',
    linkedin: 'https://linkedin.com/in/johnsmith',
  },
];

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className="text-4xl font-bold text-center my-8" style={{ color: '#333' }}>
        About Us
      </h1>
      <p className="text-lg text-center mb-8" style={{ color: '#555' }}>
        Welcome to Amsha Generation. We are dedicated to empowering students to save for a secure financial future.
      </p>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#333' }}>
          Meet Our Team
        </h2>
        <div className={styles.teamCards}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <h3 className="font-bold text-2xl mb-2" style={{ color: '#333' }}>{member.name}</h3>
              <p className="text-gray-700 mb-2">{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
              )}
              <div className={styles.bio}>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={styles.valueProposition}>
        <div className={styles.statementContainer}>
          <h2 className="text-3xl font-bold mb-4">Vision Statement</h2>
          <p className="text-lg">
            &quot;To build a financially secure future for every young adult in Kenya, empowering generations through smart savings and financial literacy.&quot;
          </p>
        </div>

        <div className={`${styles.statementContainer} mt-8`}>
          <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
          <p className="text-lg">
            &quot;Amsha Generation is dedicated to enabling students to start saving early, providing them with the tools and financial knowledge necessary to create a stable and prosperous future as they transition from education to their professional lives.&quot;
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
