import { useState, useEffect } from 'react';

import ProductList from './ProductList';


function ProductListPage() {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch(
        'https://rrrrrrr-6c648-default-rtdb.firebaseio.com/prop.json'
    )
    .then((response) => {
        return response.json()
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key]
          };

          products.push(product);
        }
        setProducts(products)
    });
},[])

  return (
    <section>
      <h1>All Products</h1>
      <ProductList products={products} />
    </section>
  );
}

export default ProductListPage;