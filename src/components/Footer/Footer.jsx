import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2024 FakeStore. All rights are reserved.</p>
      <p>Developed by <Link to="https://www.linkedin.com/in/dev-soni-448551216/" target="_blank" rel="noopener noreferrer">Dev Soni</Link></p>
    </div>
  );
}

export default Footer;