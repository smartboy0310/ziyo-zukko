import Footer from "../footer/footer";
import GoTop from "../GoTop/GoTop";
import { useRouter } from "next/router";
import Header from "../header/header";


const layout = ({ children }) => {
  const router = useRouter()
  const pageRoute = router.asPath
  return (
    <>
      <header className={pageRoute == '/about' ? "header about_page" : pageRoute == '/gallery' ? "header gallery_page" : pageRoute == '/news' ? "header news_page" : pageRoute == '/contact' ? "header contact_page" : "header" } id="header">
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

export default layout;
