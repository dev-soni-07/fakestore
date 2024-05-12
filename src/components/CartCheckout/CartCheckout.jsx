import { useContext } from 'react';
import './CartCheckout.css';
import { BsTrash } from 'react-icons/bs';
import { HeartedContext } from '../../contexts/HeartedContext';
import { Link } from 'react-router-dom';

const CartCheckout = ({ productsAdded }) => {
  const { removeProduct } = useContext(HeartedContext);

  return (
    <div className='product-items'>
      <Link to={`/details/${productsAdded?.id}`}>
        <img src={productsAdded?.image} alt="Product" />
      </Link>
      <div className='title-wrap'>
        <p>{productsAdded?.title}</p>
      </div>
      <p>${productsAdded?.price.toFixed(2)}</p>
      <p>1</p>
      <BsTrash onClick={() => removeProduct(productsAdded?.id)} className='trash-icon'/>
    </div>
  );
}

export default CartCheckout;