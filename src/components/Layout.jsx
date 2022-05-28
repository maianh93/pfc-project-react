import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../services/categories.service";
import { useGetPromotionQuery } from "../services/promotion.service";
import { ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

import LoaderInverted from "./Loader";
import { useSelector } from "react-redux";

const Layout = () => {

  // Nếu cần thì có thể dùng isLoading để hiển thị trạng thái load
  const {isLoading} = useGetAllCategoriesQuery();
  const promotionQueryResult = useGetPromotionQuery(); 

  if (isLoading || promotionQueryResult.isLoading) {
    return LoaderInverted()
  }

  return (
    <div>
      <Header />

      <Outlet />

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />

      <Footer />
    </div>
  );
};

export default Layout;