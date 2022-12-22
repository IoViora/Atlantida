import React, { useEffect, useState } from "react";
import ServiceList from "../components/Services/ServiceList";
import { useProducts } from "../contexts/ServiceContextProvider";
import ServiceSortPagination from "../components/Services/ServiceSortPagination";
import ServiceSort from "../components/Services/ServiceSort";
import "../components/Services/Service.css";
const ServicesPage = () => {
  const { products, getProducts, searchData } = useProducts();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <div className="searchmain">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="searchinp"
          type="text "
        />

        <button
          onClick={() => {
            searchData(search);
          }}
          className="searchbtn"
        >
          search
        </button>
      </div>
      <ServiceSort /> <ServiceList currentData={currentData} />
      <ServiceSortPagination page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default ServicesPage;
