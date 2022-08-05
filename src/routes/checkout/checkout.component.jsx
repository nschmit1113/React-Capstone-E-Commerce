import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    return(
        <div>
            <h1>Checkout page</h1>
            <div>
                {
                    cartItems.map((cartItem) =>{} )
                }
            </div>
        </div>
    );
};

export default Checkout;