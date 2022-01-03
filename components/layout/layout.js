import Footer from "./footer";
import MainNavigation from "./main-navigation";

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <div className="w3-content layout-container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
