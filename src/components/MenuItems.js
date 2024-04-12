const MenuItems = ({ title, itemCards }) => {
  return (
    <div className="menu-box">
      <div className="menu-title">{title}</div>
      <div className="menu-items">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100|| item.card.info.price/100 }</li>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
