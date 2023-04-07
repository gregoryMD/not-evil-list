import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  //this layout is applied to all pages via _app.js
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
