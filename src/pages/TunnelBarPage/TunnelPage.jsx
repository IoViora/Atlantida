import { Link, useNavigate } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import "./TunnelPage.css";
import tunnelImg from "../../images/Tunnelbar.jpg";
import tunnelIcon from "../../images/TunnelIcon.png";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
function TunnelNavbar() {
  const navigate = useNavigate();

  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <img className="tunnelimg" src={tunnelImg} alt="" />
      <div className="navbar">
        <div className="navbar-left">
          <button
            className="navbar-info"
            onClick={() => navigate("/tunnelaboutus")}
          >
            ABOUT US
          </button>
          <button className="tunnelbar-main" onClick={() => navigate("/")}>
            TUNNEL BAR
          </button>
          <button
            className="navbar-info"
            onClick={() => navigate("/tunnelfindus")}
          >
            FIND US
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <KeyIcon
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {email ? (
            <MenuItem onClick={handleLogout}>
              {" "}
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
        </Menu>
      </div>
      <img className="tunnelicon" src={tunnelIcon} alt="" />
      <div className="tunnel-body">
        <p className="firstMystery">
          I give you vision <br /> I can make you blind <br /> People think that
          i bring wisdom <br /> But i only bring bright
        </p>
        <p className="secondMystery">
          I am nothing, I am everything, <br /> I am infinity, I am beginning of
          math
        </p>

        <p className="thirdMystery">
          I bring you blindness, I can show brightest stars, <br /> I hide your
          fears, i show your spirit strenght
        </p>
      </div>
      <div className="footer-down">
        <div className="footer-content">
          <h4 className="footer-text">WAY TO FIND US</h4>
          <span className="footer-text">Stay alive</span>
          <span className="footer-text">Stay curious</span>
          <span className="footer-text">Become someone better</span>
          <span className="footer-text">Look around more</span>
        </div>
        <div className="footer-content">
          <h4 className="footer-text">WE SUPPORT</h4>
          <span className="footer-text">
            Everyone who is looking for second home
          </span>
          <span className="footer-text">Everyone who is looking for peace</span>
          <span className="footer-text">Everyone who can make best drink</span>
          <span className="footer-text">Everyone who can cook best </span>
        </div>
        <div className="footer-content">
          <h4 className="footer-text">CONTACT US</h4>
          <span className="footer-text">Find tunnel icons all across city</span>
          <span className="footer-text">
            We are alyaws closer than you think
          </span>
        </div>
      </div>
    </>
  );
}
export default TunnelNavbar;
