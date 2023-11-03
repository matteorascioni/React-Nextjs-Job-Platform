import { useRouter } from "next/router";
import { Get } from "@helpers/fetch_";
import { useEffect, useState, useContext } from "react";
import AppContext from "context/AppContext";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

const Activate = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const { get, response, pending, error } = Get();
  const { user, setUser, authenticated, setAuthenticated } = useContext(AppContext);

  useEffect(() => {
    if (!router.isReady) return;
    else {
      setId(router.query.id);
      setToken(router.query.token);
    }
    return () => {};
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (token !== "" && id !== "") {
      let queryUrl = "api/user/activate/" + id + "/" + token + "/";
      get(queryUrl);
    }
    return () => {};
  }, [token, id]);

  useEffect(() => {
      if (response && !error) {
        setUser(response);
        setAuthenticated(true);
        if (response.ruolo === "U" && response.is_chosing) {
          //push to chose ruolo o fallo chosare here
          console.log('RESPONSE', response);
        }
        if (response.ruolo === "C") {
          if (response.is_company) {
            //push to business app
          } else {
            //push to complete your company profile
          }
        }
        if (response.ruolo === "W" && response.is_worker) {
          if (response.is_worker) {
            //push to edit your profile
          } else {
            //push to create your profile (would be better 2 have 2 ruoutes)
          }
        }
        //per ora:
        router.push("/lease-your-dev-app");
      }

      return () => {};
  }, [response]);

  return (
    <>
      <LoadingSpinner />
    </>
  );
};
export default Activate;
