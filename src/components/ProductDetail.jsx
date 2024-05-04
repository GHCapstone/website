// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

/*
function ProductDetail() {
  return (
    <div>
      { ToDo: Product Deets Here ! }
    </div>
  );
}

export default ProductDetail;
*/

/*
const ProductDetail = ({ products })=> {
  const params = useParams();
  const id = params.id*1;
  return (
    <ul>
      {
        products.filter(product => product.id === id).map( product => {
          return (
            <li key={ product.id }>
              <Link to='/Home'>
              { product.title }
              </Link>
              <p>
                { product.description }
              </p>
            </li>
          );
        })
      }
    </ul>
  );
};

export default ProductDetail;
*/

/*
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ProductDetail;
*/


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSelectProduct = () => {
    single.addEventListener("click", (e) => {
      if(e.target.id === 'LI') {
        const li = ev.target;
        const ul = li.parentnode;
        const children = Array.from(ul.children);
        const idx = children.indexOf(li);
        product.splice(idx, 1);
        render();
      }
    })
    console.log('Product selected:', product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link to="/">Back to Home</Link>
      <button id="single" onClick={handleSelectProduct}>Select Product</button>
    </div>
  );
};

export default ProductDetail;
