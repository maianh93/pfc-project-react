import Header from "./Header";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../services/categories.service";

import LoaderInverted from "./Loader";
import { useSelector } from "react-redux";

const Layout = () => {

  // Nếu cần thì có thể dùng isLoading để hiển thị trạng thái load
  const {isLoading} = useGetAllCategoriesQuery();

  if (isLoading) {
    return LoaderInverted()
  }

  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;