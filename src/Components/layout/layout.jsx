import Footer from "../footer/footer";
import GoTop from "../GoTop/GoTop";

import Header from "../header/header";


const layout = ({ children }) => {

  return (
    <>
      <header className="header" id="header">
        <Header />
      </header>
      <main>
        {children}
        <GoTop />
      </main>
      <footer className="footer">
        <Footer />
      </footer >
    </>
  );
};

export default layout;
