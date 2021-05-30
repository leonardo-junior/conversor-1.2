import "../styles/styles.css";
import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
