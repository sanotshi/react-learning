import { useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";
import { clearCart } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold  text-lg text-center m-3 p-2">Cart</h1>
      <div className=" text-center">
        <button
          className="m-2 p-1 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
      </div>
      {/* <div><h1> ({cartItems}) </h1></div> */}
          <div>
                
                <RestaurantMenu items={cartItems}/>
                </div>    
    </div>
  );
};
export default Cart;
