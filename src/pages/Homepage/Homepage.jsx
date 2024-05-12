import axios from 'axios';
import "./Homepage.css";
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => console.log(error));

    axios.get(`https://fakestoreapi.com/products`)
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (category) => {
    const url = category !== "All" ? `https://fakestoreapi.com/products/category/${category}` : "https://fakestoreapi.com/products";
    axios.get(url)
      .then(productResult => {
        setProducts(productResult.data);
      })
      .catch((productError) => console.log(productError));
  };

  return (
    <div className="homepage-container">
      <div className='category-container'>
        <p className='category' onClick={() => handleFilter("All")}>All</p>
        {categories.map((element) => 
          <p onClick={() => handleFilter(element)} key={element}>
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </p>
        )}
      </div>
      <div className='product-container'>
        {product.map((item) => 
          <ProductCard products={item} key={item.id} />
        )}
      </div>
    </div>
  );
}

export default Homepage;