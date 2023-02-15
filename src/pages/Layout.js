import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

const Layout = ({ children }) => {
    return <>
        <MainNavbar />
        <main>{children}</main>
        <Footer />
    </>
}
export default Layout;