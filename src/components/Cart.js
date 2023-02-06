import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return <>
      <div className="flex flex-wrap">
          {
            cartItems.map((cartItem,index)=>{
               return <FoodItem {...cartItem} key={cartItem.id} index={index}/>
            })
          }
      </div>
    </>
}

export default Cart;