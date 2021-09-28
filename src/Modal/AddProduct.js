import Modal from './Modal';
import './Modal.css'

function AddProduct(modalIsOpen) {

  function addProductHandler(productData) {
    fetch(
      'https://rrrrrrr-6c648-default-rtdb.firebaseio.com/prop.json',
      {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS', 
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
      }
    )
  }

  return (
    <section className='modal'>
      <Modal onAddProduct={addProductHandler}
      modalIsOpen={modalIsOpen}
       />
    </section>
  );
}

export default AddProduct;