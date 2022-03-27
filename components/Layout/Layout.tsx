import Footer from '@components/Footer/Footer';
import React from 'react';

import Navbar from '../Navbar/Navbar';

import styles from './Layout.module.css';
const Layout:React.FC = ({children}) => {
    return (
        <div className="container">
        <Navbar />
        {children}

        <style jsx>{`
        container{
            margin-top: 100px;
        }
        
        `}</style>
        <Footer />
        </div>
        

    );
}

export default Layout;