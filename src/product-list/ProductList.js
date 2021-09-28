import { useState } from 'react';

import ProductItem from './ProductItem';
import AddProduct from '../Modal/AddProduct';
import './ProductList.css'

function  ProductList(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = ()=> {
        setModalIsOpen(true)
    }
  return (
    <ul className='list'>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          count={product.count}
        />
      ))}
      <button onClick={() => {openModal()}}>New Product</button>
      {modalIsOpen && 
    <AddProduct
    modalIsOpen={setModalIsOpen}
    />}
    </ul>   
  );
}

export default  ProductList;