import { Badge, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import image2 from "../../images/personalpage.png";
import image from "../../images/lilysecond.png";
import { getCountProductsInCart } from "../../helpers/function";
import image3 from "../../images/request.png";

import "./Navbar.css";
import { useCart } from "../../contexts/CartContextProvider";
function Navbar() {
  const navigate = useNavigate();
  const [lotus, setLotus] = useState(false);
  const addProductToCart = useCart();

  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  return (
    <div className="navbarmain">
      <div className="navbar">
        <img
          className="navbar-image"
          src={image2}
          alt=""
          onClick={() => navigate("/personalpage")}
        />
        <button
          className="navbar-information "
          onClick={() => navigate("/aboutus")}
        >
          ABOUT US
        </button>
        <button
          className="navbar-information"
          onClick={() => navigate("/addservice")}
        >
          ADD SERVICE
        </button>{" "}
        <button
          className="navbar-atlantida"
          onClick={() => navigate("/homepage")}
        >
          ATLANTIDA
        </button>
        <button
          className="navbar-information "
          onClick={() => navigate("/servicelist")}
        >
          SERVICES
        </button>
        <button
          className="navbar-information"
          onClick={() => navigate("/FindUsAtlantis")}
        >
          FIND US
        </button>
        <img
          className="navbar-image"
          src={image}
          onClick={() => {
            handleLogout();
            navigate("/");
          }}
        />
        <img
          onClick={() => navigate("/cart")}
          className="navbar-image"
          src={image3}
          alt=""
        />
        {lotus && (
          <Box>
            {email ? (
              <MenuItem onClick={handleLogout}>
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            ) : (
              <Link
                to="/auth"
                style={{
                  textDecoration: "none ",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: "center" }}>login</Typography>
                </MenuItem>
              </Link>
            )}
          </Box>
        )}
      </div>
    </div>
  );
}

export default Navbar;
