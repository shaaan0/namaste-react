import { useDispatch, useSelector }  from "react-redux";
import LOGO_URL from "../utils/imageURLs";
import Accordion from "./Accordion";
import { addItem } from "../utils/redux/cartSlice";

const MenuItems = ({ isVisible, title, itemCards, changeShowDetails }) => {
  const cart = useSelector((store) => store.cart.item)

  const dispatch = useDispatch()
  const addToCart = (item) => {
    const cartItem = {
      name: item.name,
      id : item.id,
      price : item.price,
      imageId: item.imageId,
    }
    dispatch(addItem(cartItem))
  }
  
  return (
    <Accordion
      isVisible={isVisible}
      title={title}
      item={itemCards}
      changeShowDetails={changeShowDetails}
    >
      <ul>
        {itemCards.map((item) => (
          <li
            className="list-none border-b-2 last:border-none"
            key={item.card.info.id}
          >
            <div className="flex justify-between py-8 px-4">
              <div>
                <div className="font-bold text-slate-800">
                  {item.card.info.name}
                </div>
                <div className="font-semibold text-slate-800">
                  ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </div>
                {item.card.info.ratings.aggregatedRating.rating ? (
                  <div className="text-green-950 font-medium">
                    ⭐{item.card.info.ratings.aggregatedRating.rating}
                    {item.card.info.ratings.aggregatedRating.ratingCountV2 ? (
                      <span className="text-gray-950 font-light">
                        ({item.card.info.ratings.aggregatedRating.ratingCountV2}
                        )
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="relative">
                  <img
                    className="w-[150] h-[150] rounded-lg object-cover object-center"
                    src={LOGO_URL.res_logo + item.card.info.imageId}
                  />
                  <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded-md hover:bg-slate-500"
                  onClick={() => addToCart(item.card.info)}
                  disabled = {!item.card.info.inStock}
                  >
                    Add +
                  </button>
                    
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default MenuItems;
