import { useNavigate } from "react-router-dom";
import "./TunnelPage.css";
import tunnelImg from "../../images/Tunnelbar.jpg";
function AboutUsPage() {
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
      <div className="about-us">
        <p className="aboutus-first">
          The idea of Tunnel Bar was originally created by 4 people in 1984. We
          are everywhere, and nowhere in same time. We are close to you, and too
          far from you in same time. Even we never met before, we may be your
          friend, we may your coworker, we may be your brother, we may be your
          sister. Wherever you look, you will see us, but never realize it. It
          is almost 30 underground routes in every city which can bring you to
          us. But we are not open for everyone. Only chosen ones can find us. We
          always watch you, you may not know us, you may not have ever heard
          about us. Remember that we know you, we always knew, we always were
          close to you. Even if you think that you found us by yourself remember
          that Tunnel Bar never will be founded unless it wants to be finded.
        </p>
        <p className="aboutus-second">
          We are in 18 countries. We are in 278 cities, We are exist for people,
          who want to find a second house, who is looking for piece, for
          adventure, our directory starts where directory of law of this wolrd
          ends. Be brave, be strong, be honored, be full of life energy, be full
          of strength to live this life with no fear of death. Be best of
          yourself, and we will find you, we will open our doors for you.
        </p>
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
export default AboutUsPage;
