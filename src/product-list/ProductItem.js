import './ProductItem.css';

function ProductItem(props) {
    const deleteItem = ()=> {
        delete(``)
    }

  return (
    <li className='item'>
        <div className='image'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='content'>
          <h3>{props.name}</h3>
          <p>{props.count}</p>
        </div>
        <div className='actions'>
          <button onClick={() => {deleteItem()}}>Delete
          </button>
        </div>
    </li>
  );
}

export default ProductItem;