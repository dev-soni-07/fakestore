import { useContext, useState, useEffect } from 'react';
import "./Checkout.css";
import { HeartedContext } from '../../contexts/HeartedContext';
import CartCheckout from '../../components/CartCheckout/CartCheckout';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '692px',
      maxHeight: '90vh',
      overflow: 'auto',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0, 0.5)'
    }
  };

  Modal.setAppElement('#root');

  const { hearted, setHearted } = useContext(HeartedContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let updatedTotal = 0;
    hearted.forEach(element => {
      updatedTotal += element.price;
    });
    setTotal(updatedTotal.toFixed(2));
  }, [hearted]);

  return (
    <div className='checkout-container'>
      <div className='checkout-items'>
        <div className='item-details'>
          <p>Item</p>
          <div className='item-sub-details'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
        {hearted.length === 0 ?
          <h1 className='error-message'>No Products In Cart</h1> :
          hearted.map(item => <CartCheckout productsAdded={item} key={item.id} />)
        }
        {hearted.length > 0 && (
          <div className='total-container'>
            <p>Total: ${total}</p>
            {!isCheckedOut ?
              <button className='checkout-button' onClick={() => setIsCheckedOut(true)}>Checkout</button> :
              <button className='checkout-button checked'>Checked Out</button>
            }
            <Modal
              isOpen={isCheckedOut}
              style={customStyles}
              contentLabel="Checkout Modal">
              <div className='modal-container'>
                <h1>Your order was successful!</h1>
                <h2>Check your email for the order confirmation. Thank you for shopping with FakeStore</h2>
                <Link to="/">
                  <button className='modal-button' onClick={() => setHearted([])}>
                    Return To Main Page
                  </button>
                </Link>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;