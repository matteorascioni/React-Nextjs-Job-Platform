import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import AppContext from "context/AppContext";
import { useLocalStorage } from '@helpers/use_local_storage';

const Loading = () => {
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const [lastLogin, setLastLogin] = useLocalStorage('lastLog', '');

  useEffect(() => {
    if (!router.isReady) {
      return () => {};
    }
    
    const query = router.query;
    console.log(query);
    if (query.error !== undefined) {
      //Non saprei: modale con errore e redirect a login?
    }

    const user = {
      first_name: query.first_name,
      last_name: query.last_name,
      is_active: query.is_active,
      ruolo: query.ruolo,
      is_chosing: query.is_chosing,
      is_worker: query.is_worker,
      is_company: query.is_company,
      id: query.id,
    };
    
    setUser(user);
    setLastLogin(new Date().toString());
    //il ruolo e il profilo verranno aggiornati solo quando verra creato il profilo.
    if (user.ruolo === "U" && user.is_chosing) {
      //push to chose ruolo o fallo chosare here
    }
    if (user.ruolo === "C") {
      if (user.is_company) {
        //push to business app
      } else {
        //push to complete your company profile
      }
    }

    if (user.ruolo === "W" && user.is_worker) {
      if (user.is_worker) {
        //push to edit your profile
      } else {
        //push to create your profile (would be better 2 have 2 ruoutes)
      }
    }

    router.push("/lease-your-dev-app");
    return () => {};
  }, [router.isReady, router.query]);

  return (
    <div>
      <h1>Loading Page</h1>
    </div>
  );
};
export default Loading;
