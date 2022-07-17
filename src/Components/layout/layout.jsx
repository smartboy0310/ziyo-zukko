import Footer from "../footer/footer";
import GoTop from "../GoTop/GoTop";
import { useRouter } from "next/router";
import Header from "../header/header";


const Layout = ({ children }) => {
  const router = useRouter()
  const pageRoute = router.asPath
  return (
    <>
      <header className={pageRoute == '/about' || pageRoute == '/about/employee' || pageRoute == '/about/management' ? "header about_page" : pageRoute == '/gallery' ? "header gallery_page" : pageRoute == '/news' || pageRoute == '/new/single' ? "header news_page" : pageRoute == '/contact' ? "header contact_page" : "header" } id="header">
        <Header />
        <GoTop />
      </header>
      <main>
        {children}        
      </main>
      <footer className="footer">
        <Footer />
      </footer >
    </>
  );
};

export default Layout;
