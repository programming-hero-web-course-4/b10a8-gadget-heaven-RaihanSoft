import { useOutletContext } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useOutletContext();

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length > 0 ? (
        wishlist.map(item => (
          <div key={item.id}>
            <h2>{item.category}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No items in the wishlist.</p>
      )}
    </div>
  );
};

export default Wishlist;
