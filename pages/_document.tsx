import { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Cards />
        <Footer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
