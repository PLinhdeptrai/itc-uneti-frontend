import React from "react";
import { Outlet } from "react-router-dom";
import './homePage.css'
import Header from "../../../components/header";
import Slider from "../../../components/slider";
import News from "../../../components/News/News";
import Cour from '../../../components/Cour/Cour'
import Contest from '../../../components/Contest/Contest'
import Doccument from "../../../components/Doccument/Doccument";
import Footer from "../../../components/Footer/Footer";
import Example from "../score/score2";

const HomePage = () => {

    
    return (
        <div>
            {/* <Header />
            <div className="container-homepage">
                <Slider />
                <News />
                <Cour />
                <Contest />
                <Doccument />
            </div>
            <Footer />
            <Outlet/> */}
            <Example></Example>
        </div>
    )
}

export default HomePage