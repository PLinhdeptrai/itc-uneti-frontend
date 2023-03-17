import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as apis from '../../../apis/index.api'
import { Button } from 'reactstrap';
import Header from "../../../components/header";
<<<<<<< Updated upstream
=======
import Slider from "../../../components/slider";
import LoginApi from "../login/LoginApi";
>>>>>>> Stashed changes
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