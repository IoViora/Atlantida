import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./contexts/AuthContextProvider";
import { ADMIN, PASSWORD } from "./helpers/consts";
import MainRoutes from "./MainRoutes/MainRoutes";
import service from "./images/atlantis.png";

function App() {
  const {
    user: { email, uid },
    user,
  } = useAuth();
  if (email) {
    return (
      <div
        style={{
          backgroundImage: `url(${service})`,
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <MainRoutes />
        <Footer />
      </div>
    );
  } else {
    return <MainRoutes />;
  }
}

export default App;
