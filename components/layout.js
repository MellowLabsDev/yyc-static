import Header from './Nav.tsx';
import Footer from './sections/Footer.tsx';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;