import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ServiceContextProvider";
import ServiceCard from "./ServiceCard";
import "./Service.css";
const ServiceList = ({ currentData }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        {products && products.length > 0
          ? currentData().map((product) => (
              <ServiceCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </>
  );
};

export default ServiceList;
