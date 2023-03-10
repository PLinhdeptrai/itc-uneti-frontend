import React, { useEffect, useState } from "react";
import './Login.css';
import '../../../asset/css/util.css';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import '@material-design-icons/font';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import path from "../../../utils/path/path";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const Eyes = () => {
        const inputpass = document.querySelector(".inputpass");
        const eyesOpen = document.querySelector(".eyes-open")
        const eyesClose = document.querySelector(".eyes-close")
        eyesOpen.addEventListener("click", function () {
            eyesOpen.classList.add("hidden");
            eyesClose.classList.remove("hidden");
            inputpass.setAttribute("type", "password");

        })
        eyesClose.addEventListener("click", function () {
            eyesOpen.classList.remove("hidden");
            eyesClose.classList.add("hidden");
            inputpass.setAttribute("type", "text");
        })
    }
    const onSubmit = (data) => console.log(data);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/add")
    //     }
    // }, [])

    const loginApp = () => {
        console.warn(username,password)
        var item={username,password}
    }
    return (

        <div className="container-login"  >
            <div className="form-login wrap-login100 wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" >
                <div className="login100-form " >

                    <form className="login-body validate-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-title login100-form-title p-b-49">
                            <h3>????ng nh???p</h3>
                        </div>
                        <div className="form-control login-input wrap-input100 validate-input m-t-23" data-validate="Username is reauired">
                            <span className="label-input label-input100">T??n ????ng nh???p</span>
                            <div className="input-field">
                                <AiOutlineUser className="input-icon"></AiOutlineUser>
                                <input
                                    id="username"
                                    className="input100"
                                    type="text"
                                    autoComplete="off"
                                    name="username"
                                    placeholder="Nh???p t??n ????ng nh???p"
                                    {...register("name", { required: true, minLength: 5 })}
                                    onChange={(e) => setUsername(e.target.value)}
                                ></input>
                                <span className="focus-input100"></span>
                                <small></small>
                            </div>

                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.name?.type === "required" && <li>Vui l??ng nh???p username</li>}
                                {errors.name?.type === "minLength" && <li>Username kh??ng h???p l???</li>}
                            </div>

                        )}

                        <div className="form-control login-input wrap-input100 validate-input m-t-23 " data-validate="Password is reauired">
                            <span className="label-input label-input100">M???t kh???u</span>
                            <div className="input-field">
                                <AiOutlineLock className="input-icon"></AiOutlineLock>
                                <input
                                    id="password"
                                    className="input100 inputpass"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Nh???p m???t kh???u"
                                    name="password"
                                    {...register("password", { required: true, minLength: 8 })}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <span className="focus-input100"></span>
                                <div className="icon-eye" onClick={Eyes} >
                                    <BsFillEyeSlashFill className="icon-eyes eyes-close"></BsFillEyeSlashFill>
                                    <IoEyeSharp className="icon-eyes eyes-open hidden"></IoEyeSharp>
                                </div>
                            </div>


                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.password?.type === "required" && (
                                    <li>Vui l??ng nh???p password</li>
                                )}
                                {errors.password?.type === "minLength" && <li>Password kh??ng h???p l???</li>}
                            </div>

                        )}
                        <div className="text-right p-t-8 p-b-31">
                            <Link to="/forgot" className="forgot-password" >
                                Qu??n m???t kh???u?
                            </Link>
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button 
                                className="login100-form-btn"
                                onClick={loginApp}
                                >
                                    ????ng nh???p
                                </button>
                            </div>
                        </div>

                    </form>

                    <div className="txt1 text-center  p-t-54 p-b-20">
                        <span>
                            Ho???c ????ng nh???p b???ng
                        </span>
                    </div>
                    <div className="flex-c-m">
                        <a href="#" className="login100-social-item bg1">
                            <FaFacebook></FaFacebook>
                        </a>

                        <a href="#" className="login100-social-item bg3">
                            <FaGoogle></FaGoogle>
                        </a>
                    </div>
                    <div className="flex-col-c p-t-155">
                        <span className="txt1 p-b-17">
                            Ch??a c?? t??i kho???n ?
                        </span>

                        <Link to="/register" className="txt2">
                            ????ng k??
                        </Link>


                    </div>
                </div>
            </div>

        </div>
    )

}

export default Login;
