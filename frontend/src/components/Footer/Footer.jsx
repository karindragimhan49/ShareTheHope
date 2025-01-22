import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo or Site Name */}
        <div className="mb-6">
          <a href="/" className="text-2xl font-bold hover:text-blue-400">
            ShareTheHope
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-blue-700 transition-colors" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShareTheHope. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
