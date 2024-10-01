const Footer = () => {
    return (
      <footer className="footer bg-gray-900 py-8 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Amsha Generation. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <a href="/about" className="hover:text-indigo-500 transition">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-500 transition">Contact</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-indigo-500 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-indigo-500 transition">Terms of Service</a>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-indigo-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-indigo-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-500 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  