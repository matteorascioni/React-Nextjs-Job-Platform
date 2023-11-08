import React from 'react';
import dynamic from 'next/dynamic'
// import AppContext from 'context/AppContext';
// import {getDefaultUser} from '@helpers/defaults';
// import {useLocalStorage} from '@helpers/use_local_storage';
// import {Get} from '@helpers/fetch_';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import styles from './Layout.module.css';

interface ILayout {
    children: React.ReactElement | React.ReactElement[];
}

// Rendering the Header on the client side not on the server
const DynamicHeader = dynamic(() => import('@components/Header/Header'), {
    ssr: false,
})

const Layout = ({ children }: ILayout) => {
//     const {
//         authenticated,
//         setAuthenticated,
//         user,
//         setUser,
//         sessionExpired, 
//         setSessionExpired 
//     } = useContext(AppContext);
    
    // const { get, response, error, } = Get();
    // const [lastLogin, setLastLogin] = useLocalStorage('lastLog', '');
    
    // useEffect(() => {
    //     if(authenticated && user !== getDefaultUser()) {
    //     } else {
    //         if(lastLogin !== '') {
    //             try {
    //                 let dateLogin = new Date(lastLogin);
    //                 let timeDelta = new Date() - dateLogin;
    //                 let annoInMillisecondi = 31536000000;

    //                 if (timeDelta < annoInMillisecondi) {
    //                     get('api/user/refresh/');
    //                 }
    //             }
    //             catch(error) {
    //                 console.log(error);
    //             }
    //         }
    //     }

    //     return () => {};
    // }, []);

    // useEffect(() => {
    //     if(response && !error) {
    //         setAuthenticated(true);
    //         setUser(response);
    //         setLastLogin(new Date().toString());
    //     }

    //     return () => {};
    // }, [response, error]);

    return (
        <>
            <DynamicHeader />
                <main className={styles.main}>
                    {children}
                </main>
            <Footer/>
        </>
    );
};

export default Layout;