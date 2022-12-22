import { useNavigate } from "react-router-dom";
import "./TunnelPage.css";
import tunnelImg from "../../images/Tunnelbar.jpg";
import tunnelIcon from "../../images/TunnelIcon.png";
function FindUs() {
  const navigate = useNavigate();
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
      <div className="findusbody">
        <span className="findmetext">Find this logo, wherever you are</span>
        <img className="findme" src={tunnelIcon} alt="" />
        <span className="findmetext">If you see it, we are close around</span>
      </div>
      <div className="footer-down">
        <div className="footer-content">
          <h4>WAY TO FIND US</h4>
          <span>Stay alive</span>
          <span>Stay curious</span>
          <span>Become someone better</span>
          <span>Look around more</span>
        </div>
        <div className="footer-content">
          <h4>WE SUPPORT</h4>
          <span>Everyone who is looking for second home</span>
          <span>Everyone who is looking for peace</span>
          <span>Everyone who can make best drink</span>
          <span>Everyone who can cook best </span>
        </div>
        <div className="footer-content">
          <h4>CONTACT US</h4>
          <span>Find tunnel icons all across city</span>
          <span>We are alyaws closer than you think</span>
        </div>
      </div>
    </>
  );
}
export default FindUs;
