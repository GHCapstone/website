import baseURL from '../api'
import React, { useState, useEffect } from 'react';
//import Product from './Product';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/products`)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        })
  }, []);

  console.log(products);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
      {/*<div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>*/}
    </div>
  );
}

export default Home;
