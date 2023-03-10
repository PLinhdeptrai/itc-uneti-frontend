import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as apis from '../../../apis/index.api'
import { Button } from 'reactstrap';
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
            <div className="container-homepage">
                <Slider></Slider>
            </div>
            <Outlet/>
        </div>
    )
}

export default HomePage