import Header from "./Header";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../services/categories.service";

const Layout = () => {

  // Nếu cần thì có thể dùng isLoading để hiển thị trạng thái load
  const {isLoading} = useGetAllCategoriesQuery();

  if (isLoading) {
    return <p>Đang tải...</p>
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