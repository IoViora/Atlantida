import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ServiceContextProvider";
import "../Services/Service.css";

const Details = () => {
  const { getOneProductDetails, productDetails, updateProduct } = useProducts();
  const [coment, setComent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOneProductDetails(id);
  }, []);
  function comment() {
    let obs = productDetails;
    !obs.comments
      ? (obs.comments = [{ coment, id }])
      : obs.comments.push({ coment, id });
    updateProduct(id, obs);
  }

  function deleteComment(index) {
    let obj2 = productDetails;
    obj2.comments.splice(index, 1);
    updateProduct(id, obj2);
  }

  return (
    <div className="personalpage">
      {productDetails && (
        <>
          <div>
            <h1>
              <img src={productDetails.image} alt="" />{" "}
              <h1>{productDetails.name}</h1>
            </h1>
          </div>
          <div className="comments">
            <input
              onChange={(e) => setComent(e.target.value)}
              className="revieinp"
              type="text"
            />
            <button onClick={() => comment()} className="reviewbtn">
              add review
            </button>

            {productDetails.comments &&
              productDetails.comments.map((item, index) => (
                <Box className="commentblock" key={item.id}>
                  <h1 className="commenttext">{item.coment}</h1>{" "}
                  <button
                    className="reviewdlt"
                    onClick={() => deleteComment(index)}
                  >
                    delete
                  </button>
                </Box>
              ))}
          </div>
          <h5 style={{ color: "white" }}></h5>
        </>
      )}
    </div>
  );
};

export default Details;
