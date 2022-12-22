import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Auth from "../components/Auth/Auth";
import HomePage from "../components/Home/HomePage";
import NotFound from "../components/NotFound/NotFound";
import { useAuth } from "../contexts/AuthContextProvider";
import AboutUsPage from "../pages/TunnelBarPage/AboutUsPage";
import FindUs from "../pages/TunnelBarPage/FindUs";
import TunnelBar from "../pages/TunnelBarPage/TunnelPage";
import AddService from "../components/Services/AddService";
import ServicesPage from "../pages/ServicesPage";
import EditPage from "../components/Services/EditService";
import FindUsAtlantis from "../pages/FindUsPage";
import PersonalPage from "../pages/PersonalPage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import DetailsPage from "../pages/DetailsPage";
const MainRoutes = () => {
  const {
    user: { email },
  } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/", element: <TunnelBar />, id: 1 },
    { link: "/tunnelaboutus", element: <AboutUsPage />, id: 2 },
    { link: "/tunnelfindus", element: <FindUs />, id: 3 },
    { link: "/auth", element: <Auth />, id: 4 },
    { link: "/*", element: <NotFound />, id: 5 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/auth", element: <Auth />, id: 4 },
    { link: "/homepage", element: <HomePage />, id: 6 },
    { link: "/aboutus", element: <AboutUs />, id: 7 },
    { link: "/*", element: <NotFoundPage />, id: 5 },
    { link: "/addservice", element: <AddService />, id: 8 },
    { link: "/servicelist", element: <ServicesPage />, id: 9 },
    { link: "/services/:id", element: <EditPage />, id: 10 },
    { link: "/FindUsAtlantis", element: <FindUsAtlantis />, id: 11 },
    { link: "personalpage", element: <PersonalPage />, id: 12 },
    { link: "/cart", element: <CartPage />, id: 13 },
    { link: "/detailspage/:id", element: <DetailsPage />, id: 14 },
  ];
  return (
    <>
      <Routes>
        {!email &&
          PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}

        {email &&
          PRIVATE_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
