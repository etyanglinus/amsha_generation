import React from 'react';
import styles from '../styles/Features.module.css';

const featuresData = [
  {
    title: 'Savings Plans',
    description: 'Tailored savings plans to meet every student’s needs.',
    visual: '/path/to/savings-plan-image.jpg', // Replace with the actual path to your visual demo
  },
  {
    title: 'Budgeting Tools',
    description: 'Tools to help students manage their finances effectively.',
    visual: '/path/to/budgeting-tools-image.jpg', // Replace with the actual path to your visual demo
  },
  {
    title: 'Education Workshops',
    description: 'Workshops designed to educate students on financial literacy.',
    visual: '/path/to/workshops-image.jpg', // Replace with the actual path to your visual demo
  },
];

const partnersData = [
  {
    name: 'Partner 1',
    logo: '/path/to/partner1-logo.jpg', // Replace with the actual path to your partner logo
  },
  {
    name: 'Partner 2',
    logo: '/path/to/partner2-logo.jpg',
  },
  {
    name: 'Partner 3',
    logo: '/path/to/partner3-logo.jpg',
  },
];

const howItWorksSteps = [
  {
    step: '1. Sign Up',
    description: 'Create your account and start your savings journey in just a few minutes.',
  },
  {
    step: '2. Set Goals',
    description: 'Set your savings goals and manage your finances with our budgeting tools.',
  },
  {
    step: '3. Start Saving',
    description: 'Make deposits and watch your savings grow with helpful tips and guidance.',
  },
];

const Features = () => {
  return (
    <div className={styles.features}>
      <h1 className={styles.title}>Features</h1>
      <p className={styles.description}>
        Explore our platform's key features designed to help students save and budget efficiently.
      </p>

      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <img src={feature.visual} alt={feature.title} className={styles.featureImage} />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          {howItWorksSteps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <h3 className={styles.stepTitle}>{step.step}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <h2 className={styles.sectionTitle}>Our Partners</h2>
        <div className={styles.partnersGrid}>
          {partnersData.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
              <p className={styles.partnerName}>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
