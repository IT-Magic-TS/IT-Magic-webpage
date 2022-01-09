import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/w3.css";
import "../styles/layout.css";
import "../styles/home.css";
import "../styles/advert.css";
import "../styles/game.css";
import "../styles/gallery.css";
import Layout from "../components/layout/layout";
import OrnamentalCircles from "../components/ornamental-circles/ornamental-circles";
import Advert from "../components/advert";
import AlertPrivacy from "../components/alert-privacy";
import { MessengerChat } from "react-messenger-chat-plugin";

function MyApp({ Component, pageProps }) {
  // set privacy
  const [agree, setAgree] = useState(true);
  useEffect(() => {
    const privacy = JSON.parse(localStorage.getItem("privacyOK"));
    if (privacy !== true) {
      setAgree(false);
    }
  }, []);
  const privacyHandler = () => {
    setAgree(true);
    localStorage.setItem("privacyOK", JSON.stringify(true));
  };
  return (
    <>
      {!agree && <AlertPrivacy privacyHandler={privacyHandler} />}
      <OrnamentalCircles />
      <Advert />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <MessengerChat pageId="108660137620792" />;
    </>
  );
}

export default MyApp;
