import DashboardLayout from '../../components/DashboardLayout';

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="profile">
        <h2>User Profile</h2>
        
        {/* Personal Information Section */}
        <section className="personal-info">
          <h3>Personal Information</h3>
          <form>
            <label>
              Name:
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Phone Number:
              <input type="tel" placeholder="Enter your phone number" required />
            </label>
            <label>
              Date of Birth:
              <input type="date" required />
            </label>
            <button type="submit" className="update-button">Update Personal Info</button>
          </form>
        </section>

        {/* Passport Information Section */}
        <section className="passport-info">
          <h3>Passport Information</h3>
          <form>
            <label>
              Passport Number:
              <input type="text" placeholder="Enter your passport number" required />
            </label>
            <label>
              Expiry Date:
              <input type="date" required />
            </label>
            <label>
              Upload Passport:
              <input type="file" accept="image/*" required />
            </label>
            <button type="submit" className="update-button">Update Passport Info</button>
          </form>
        </section>

        {/* Security Settings Section */}
        <section className="security-settings">
          <h3>Security Settings</h3>
          <button className="security-button">Change Password</button>
          <button className="security-button">Enable Two-Factor Authentication (2FA)</button>
          <div className="two-step-info">
            <p>Enhance your account security by enabling Two-Factor Authentication (2FA). You’ll need to enter a code sent to your phone or email in addition to your password.</p>
          </div>
        </section>

        <style jsx>{`
          .profile {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 0 auto;
          }

          h2 {
            margin-bottom: 30px;
            text-align: center;
            font-size: 2rem;
          }

          h3 {
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          section {
            margin-bottom: 40px;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-bottom: 15px;
            font-weight: bold;
          }

          input[type="text"],
          input[type="email"],
          input[type="tel"],
          input[type="date"],
          input[type="file"] {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-top: 5px;
            margin-bottom: 10px;
            font-size: 1rem;
          }

          .update-button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.3s;
          }

          .update-button:hover {
            background-color: #45a049;
          }

          .security-settings {
            margin-top: 30px;
          }

          .security-button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 15px;
            transition: background-color 0.3s;
          }

          .security-button:hover {
            background-color: #0056b3;
          }

          .two-step-info {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 4px solid #007bff;
            font-size: 0.9rem;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
