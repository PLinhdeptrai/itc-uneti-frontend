import React from "react";
import { Outlet } from "react-router-dom";
import './homePage.css'
import Header from "../../../components/header";
import Slider from "../../../components/slider";
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
            <Header></Header>
            <Outlet/>
        </div>
    )
}

export default HomePage