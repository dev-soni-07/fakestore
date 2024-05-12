import { useContext, useState, useEffect } from 'react';
import "./ProductCard.css";
import { AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HeartedContext } from '../../contexts/HeartedContext';

const ProductCard = ({ products }) => {
  const [isHearted, setIsHearted] = useState(false);
  const { hearted, addProduct, removeProduct } = useContext(HeartedContext);

  useEffect(() => {
    setIsHearted(hearted.some(item => item.id === products?.id));
  }, [hearted, products]);

  return (
    <div className='product-card'>
      <div className='img-box'>
        <Link to={`/details/${products?.id}`}>
          <img src={products?.image} alt={products?.title} />
        </Link>
        <div className='icon-box'>
          {isHearted ? (
            <AiFillHeart className='heart-icon filled' onClick={() => removeProduct(products.id)} />
          ) : (
            <AiTwotoneHeart className='heart-icon' onClick={() => addProduct(products)} />
          )}
        </div>
      </div>
      <div className='product-info'>
        <p>{products?.title}</p>
        <p>{products?.category.charAt(0).toUpperCase() + products?.category.slice(1)}</p>
        <p>${products?.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;