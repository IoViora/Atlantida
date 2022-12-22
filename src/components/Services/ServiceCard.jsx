import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ServiceContextProvider";
import "./Service.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
function ServiceCard({ product }) {
  const { deleteProduct } = useProducts();
  const ADMIN = "admin@gmail.com";
  const navigate = useNavigate();
  const { productDetails, setProductDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  // console.log(productDetails);
  const {
    user: { email, uid },
  } = useAuth();

  return (
    <Card className="card" style={{ width: "20rem", margin: "2rem" }}>
      <Card.Img
        className="cardimg"
        variant="top"
        height={150}
        src={product.image}
      />
      <Card.Body>
        <Card.Title className="carddetails">{product.name}</Card.Title>
        <Card.Text className="carddetails">{product.description}</Card.Text>
        <Card.Text className="carddetails">{product.price}</Card.Text>
        <Card.Text className="carddetails">{product.category}</Card.Text>
        <Card.Text className="carddetails">{product.requirement}</Card.Text>
        <div className="cardbtn">
          {email === ADMIN ? (
            <>
              {" "}
              <Button
                className="cardbtns"
                onClick={() => deleteProduct(product.id)}
              >
                DELETE
              </Button>
              <Button
                className="cardbtns"
                onClick={() => navigate(`/services/${product.id}`)}
              >
                EDIT
              </Button>
            </>
          ) : (
            <>
              {checkProductInCart(product.id) ? (
                <Button
                  className="cardbtns"
                  variant="contained"
                  onClick={() => addProductToCart(product)}
                  sx={{
                    backgroundColor: "#0a203f",
                    color: "white",
                    width: "300px",
                    height: "55px",
                    borderRadius: "1px",
                    font: "16px",
                    fontWeight: "600",
                  }}
                >
                  ALREADY IN CART
                </Button>
              ) : (
                <Button
                  className="cardbtns"
                  variant="contained"
                  onClick={() => addProductToCart(product)}
                  sx={{
                    backgroundColor: "#0a203f",
                    color: "white",
                    width: "300px",
                    height: "55px",
                    borderRadius: "1px",
                    font: "16px",
                    fontWeight: "600",
                  }}
                >
                  ADD TO CART
                </Button>
              )}
            </>
          )}
          {uid === product.userid ? (
            <>
              {" "}
              <Button
                className="cardbtns"
                onClick={() => deleteProduct(product.id)}
              >
                DELETE
              </Button>
              <Button
                className="cardbtns"
                onClick={() => navigate(`/services/${product.id}`)}
              >
                EDIT
              </Button>
              {checkProductInCart(product.id) ? (
                <Button
                  className="cardbtns"
                  variant="contained"
                  onClick={() => addProductToCart(product)}
                  sx={{
                    backgroundColor: "#0a203f",
                    color: "white",
                    width: "300px",
                    height: "55px",
                    borderRadius: "1px",
                    font: "16px",
                    fontWeight: "600",
                  }}
                >
                  ALREADY IN CART
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="cardbtns"
                  onClick={() => addProductToCart(product)}
                  sx={{
                    backgroundColor: "#0a203f",
                    color: "white",
                    width: "300px",
                    height: "55px",
                    borderRadius: "1px",
                    font: "16px",
                    fontWeight: "600",
                  }}
                >
                  ADD TO CART
                </Button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <Button
          onClick={() => navigate(`/detailspage/${product.id}`)}
          className="cardbtns"
        >
          View card
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
