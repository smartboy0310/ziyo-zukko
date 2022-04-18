import Footer from "../footer/footer";
import Header from "../header/header";


const layout = ({ children }) => {

  return (
    <>
      <header className="header" id="header">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Footer />
      </footer >
    </>
  );
};

export default layout;
