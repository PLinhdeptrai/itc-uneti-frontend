import React from "react";
import { Outlet } from "react-router-dom";
import './homePage.css'
import { Header, Slider, News, Cour, Contest, Doccument, Footer } from "../../../components/index.component";


const HomePage = () => {

    
    return (
        <div>
            <Header />
            <div className="container-homepage">
                <Slider />
                <News />
                <Cour />
                <Contest />
                <Doccument />
            </div>
            <Footer />
            <Outlet/>
        </div>
    )
}

export default HomePage