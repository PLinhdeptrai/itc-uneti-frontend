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
const HomePage = () => {

    // useEffect(() => {
    //     const fetchDataHome = async () => {
    //         const response = await apis.getHome()
    //         console.log(response)
    //     }
    //     fetchDataHome()
    // }, [])
    // useEffect(() => {
    //     const fetchLogin = async () => {
    //         const responseLogin = await apis.LoginApi()
    //         console.log(responseLogin)
    //     }
    //     fetchLogin()
    // }, [])
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