import Header from "../header/header";


const layout = ({ children }) => {

  return (
    <>
      <header className="header" id="header">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="footer">

      </footer>
    </>
  );
};

export default layout;
