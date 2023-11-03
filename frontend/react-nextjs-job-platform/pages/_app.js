import Layout from "@components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import { useState } from "react";
// import AppContext from "context/AppContext";

import "@styles/globals.css";
import "@styles/normalize.css";
import "@styles/variables.css";
import "@styles/grid.css";

const MyApp = ({ Component, pageProps }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [user, setUser] = useState({});
  const [worker, setWorker] = useState({});
  const [company, setCompany] = useState({});
  const [sessionExpired, setSessionExpired] = useState(false);

  return (
    // <AppContext.Provider
    //   value={{
    //     authenticated,
    //     setAuthenticated,
    //     csrfToken,
    //     setCsrfToken,
    //     user,
    //     setUser,
    //     worker,
    //     setWorker,
    //     company,
    //     setCompany,
    //     sessionExpired, 
    //     setSessionExpired,
    //   }}
    // >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    //</AppContext.Provider>
  );
};

export default appWithTranslation(MyApp);
