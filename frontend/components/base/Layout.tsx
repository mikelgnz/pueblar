import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <title>Pueblar - Come to the Pueblo</title>
      </Head>
      <Navbar />
      <main tw="pt-28 pb-16 px-4 min-h-screen bg-[#fefbe2]" >{children}</main>
      <Footer />
    </>
  );
};
