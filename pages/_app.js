import "../styles/globals.css";
import ColorProvider from "../contexts/ColorContext";
import { BrowserRouter as Router } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default MyApp;
