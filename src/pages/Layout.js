import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

const Layout = ({ children }) => {

    const { pathname } = useLocation();

    return <>
        <MainNavbar />
        <main>{children}</main>
       {pathname !== "/" &&  <Footer />}
    </>
}
export default Layout;