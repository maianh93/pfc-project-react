import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../services/categories.service";
import { useGetPromotionQuery } from "../services/promotion.service";
import { ToastContainer } from "react-toastify";

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
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        autoClose={1000}
        position="bottom-right"
      />

      <Footer />
    </div>
  );
};

export default Layout;