import React from 'react'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'

const HomePageLayOut = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
};
export default HomePageLayOut