import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.mainContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
