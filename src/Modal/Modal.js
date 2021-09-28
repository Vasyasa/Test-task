import { useRef } from 'react';
import './Modal.css'

function Modal(props) {
const closeModal = () => {
    props.modalIsOpen.modalIsOpen(false)
}

  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const countInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCount = countInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      name: enteredTitle,
      image: enteredImage,
      count: enteredCount,
      description: enteredDescription,
    };

    props.onAddProduct(productData);
    closeModal()
  }

  return (
      <div className='modal-body'>
      <form className='form' onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='count'>Count</label>
          <input type='text' required id='count' ref={countInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='2'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <button className='btn' >Add</button>
      </form>
      <button className='btn' onClick={ ()=> {closeModal()}}>Cancel</button>
      </div>
  );
  }
  
  export default Modal;