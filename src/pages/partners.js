import Image from 'next/image';
import styles from '../styles/Partners.module.css'; // Create this CSS file for styling

const partnersData = [
  {
    name: 'Partner 1',
    logo: '/path/to/partner1-logo.jpg',
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

const Partners = () => {
  return (
    <div className={styles.partnersPage}>
      <h1 className={styles.title}>Our Partners</h1>
      <p className={styles.description}>
        We are proud to collaborate with these amazing partners.
      </p>
      <div className={styles.partnersGrid}>
        {partnersData.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <Image
              src={partner.logo}
              alt={partner.name}
              className={styles.partnerLogo}
              width={200}
              height={100}
            />
            <p className={styles.partnerName}>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
