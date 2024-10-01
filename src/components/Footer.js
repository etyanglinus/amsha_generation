import Link from 'next/link'; // Import Next.js Link component

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 py-8 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Amsha Generation. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <Link href="/about" className="hover:text-indigo-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-indigo-500 transition">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-indigo-500 transition">
              Terms of Service
            </Link>
          </li>
        </ul>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="hover:text-indigo-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-indigo-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="hover:text-indigo-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
