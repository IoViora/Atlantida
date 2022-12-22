import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useProducts } from "../../../contexts/ServiceContextProvider";
import ProductCard from "../../Services/ServiceCard";

const Personal = () => {
  const { products, getProducts } = useProducts();
  const {
    user: { email, uid },
  } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  function currentData() {
    return products.filter((item) => item.userid === uid);
  }
  return (
    <>
      <div>
        {currentData() && currentData().length > 0 ? (
          currentData().map((item) => (
            <>
              <h1>This is personal page N# {`${item.name}`}</h1>
              <ProductCard product={item} key={item.id} />
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Personal;
