import {useContext} from 'react'
import CartContext from '../Context/cart/CartContext'

const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div>
              <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} $ {item.price}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
        </div>
    )
}

export default CartItem
