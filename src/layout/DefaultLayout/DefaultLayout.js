import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
