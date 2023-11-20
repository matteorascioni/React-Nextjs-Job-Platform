import React from 'react';
import Footer from '@components/Footer/Footer';
import AppHeader from '@components/AppHeader/AppHeader';

import styles from './AppLayout.module.css';

interface IAppLayout {
    children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: IAppLayout) => {
    return (
        <>  
            <AppHeader/>
                <main className={styles.main}>
                    {children}
                </main>
            <Footer/>
        </>
    );
};

export default Layout;