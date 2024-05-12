import { useContext } from 'react';
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeartedContext } from '../../contexts/HeartedContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { hearted } = useContext(HeartedContext);

  return (
    <div className="header-container">
      <Link to="/">
        <h1>FakeStore</h1>
      </Link>
      <Link to="/checkout" className='cart-container'>
        <AiOutlineShoppingCart className='cart-icon' />
        {hearted.length > 0 && (
          <p className='count-button'>{hearted.length}</p>
        )}
      </Link>
    </div>
  );
}

export default Header;