import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

function Footer() {
  return (
    <footer style={{ textAlign: "center", paddingBottom: "20px" }}>
      &copy; 2022 Mike
    </footer>
  );
}
