import { useSelector, useDispatch } from "react-redux";
import LOGO_URL from "../utils/imageURLs";
import { removeItem, clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const removeItemFromCart = (val) => {
    const isItemPresent = (element) => element.id === val
    const index = cartItems.findIndex(isItemPresent)
    dispatch(removeItem(index));
  };

  const cartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div
      className="m-auto max-w-[660] text-center"
    >
      <div className="mx-4 my-3 p-2">
        {!cartItems.length ? (
          <div>uhh ho, You have nothing in your cart</div>
        ) : (
            <>
            <button className="bg-slate-900 text-white hover:bg-slate-500 px-2 py-1 rounded-md" onClick={() => cartClear()}>Clear Cart</button>
          {cartItems.map((item, index) => {
              return (
              <div key={item.id + index} className="flex justify-between p-4">
                
                <div className="flex flex-wrap  gap-5 ">
                  <img
                    className="w-[50]"
                    src={LOGO_URL.res_logo + item.imageId}
                    />
                  <span className="flex-wrap w-96">{item.name}</span>
                </div>
                <div>
                  <span>{item.price / 100} </span>
                  <button
                    className="pl-5"
                    onClick={() => removeItemFromCart(item.id)}
                    >
                    x
                  </button>
                </div>
              </div>
            );
        })}
        </>
        )
        
        }
      </div>
    </div>
  );
};

export default Cart;
