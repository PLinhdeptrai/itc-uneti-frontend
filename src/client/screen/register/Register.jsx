import React, {useState} from "react";
import './Register.css';
import '../../../asset/css/util.css';
import axios from "../../../axios";
import '@material-design-icons/font';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";




function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    // const submit = e =>{
    //     e.preventDefault();
    //     await axios.post('http://localhost:8080/public/api/register', data){
    //         name,
    //         username,
    //         password,
    //         email,
    //         phone
    //     }
    // }
    const Eyes = () => {
    
        const inputpass = document.querySelector(".inputpass");
        const eyesOpen = document.querySelector(".eyes-open")
        const eyesClose = document.querySelector(".eyes-close")
        eyesOpen.addEventListener("click", function(){
            eyesOpen.classList.add("hidden");
            eyesClose.classList.remove("hidden");
            inputpass.setAttribute("type", "password");
            
        })
        eyesClose.addEventListener("click", function(){
            eyesOpen.classList.remove("hidden");
            eyesClose.classList.add("hidden");
            inputpass.setAttribute("type", "text");
        })
    }
    return (
        <div className="container-register">
            <div className="form-login wrap-login100 wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <div className="login100-form validate-form">

                    <form className="login-body " onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-title login100-form-title p-b-49">
                            <h3>????ng K??</h3>
                        </div>
                        <div className="login-input wrap-input100 validate-input m-t-23" data-validate="Username is reauired">
                            <span className="label-input label-input100">H??? v?? t??n</span>
                            <div className="input-field">
                                <AiOutlineUser className="input-icon"></AiOutlineUser>
                                <input
                                    className="input100"
                                    type="text"
                                    autoComplete="off"
                                    name="name"
                                    placeholder="Nh???p h??? v?? t??n"
                                    onChange={e=> setName(e.target.value)}
                                    {...register("name", { required: true, minLength: 12 })}
                                ></input>
                                <span className="focus-input100"></span>
                            </div>

                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.name?.type === "required" && <li>Vui l??ng nh???p h??? v?? t??n</li>}
                                {errors.name?.type === "minLength" && <li>Vui l??ng nh???p h??? v?? t??n h???p l???</li>}
                            </div>

                        )}
                        <div className="login-input wrap-input100 validate-input m-t-23">
                            <span className="label-input label-input100">T??n ????ng nh???p</span>
                            <div className="input-field">
                                <AiOutlineUser className="input-icon"></AiOutlineUser>
                                <input
                                    className="input100"
                                    type="text"
                                    autoComplete="off"
                                    name="username"
                                    placeholder="Nh???p t??n ????ng nh???p"
                                    onChange={e=> setUsername(e.target.value)}
                                    {...register("username", { required: true, minLength: 5 })}
                                ></input>
                                <span className="focus-input100"></span>
                            </div>

                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.username?.type === "required" && <li>Vui l??ng nh???p username</li>}
                                {errors.username?.type === "minLength" && <li>Username kh??ng h???p l???</li>}
                            </div>

                        )}
                        <div className="login-input wrap-input100 validate-input m-t-23" >
                            <span className="label-input label-input100">M???t kh???u</span>
                            <div className="input-field">
                                <AiOutlineLock className="input-icon"></AiOutlineLock>
                                <input
                                    id="password"
                                    className="input100 inputpass"
                                    type="password"
                                    autoComplete="off"
                                    name="username"
                                    placeholder="Nh???p m???t kh???u"
                                    onChange={e=> setPassword(e.target.value)}
                                    {...register("password", { required: true, minLength: 8 })}
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
                                {errors.password?.type === "required" && <li>Vui l??ng nh???p password</li>}
                                {errors.password?.type === "minLength" && <li>Password kh??ng h???p l???</li>}
                            </div>

                        )}
                        
                        <div className="login-input wrap-input100 validate-input m-t-23" >
                            <span className="label-input label-input100">Email</span>
                            <div className="input-field">
                                <AiOutlineMail className="input-icon"></AiOutlineMail>
                                <input
                                    className="input100"
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Nh???p email"
                                    onChange={e=> setEmail(e.target.value)}
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                ></input>
                                <span className="focus-input100"></span>
                                
                            </div>

                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.email?.type === "required" && <li>Vui l??ng nh???p email</li>}
                                {errors.email?.type === "pattern" && <li>Email kh??ng h???p l???</li>}
                            </div>

                        )}
                        <div className="login-input wrap-input100 validate-input m-t-23" >
                            <span className="label-input label-input100">S??? ??i???n tho???i</span>
                            <div className="input-field">
                                <AiOutlinePhone className="input-icon"></AiOutlinePhone>
                                <input
                                    className="input100"
                                    type="number"
                                    autoComplete="off"
                                    name="phone"
                                    placeholder="Nh???p s??? ??i???n tho???i"
                                    onChange={e=> setPhone(e.target.value)}
                                    {...register("phone", { required: true, minLength: 9 })}
                                ></input>
                                <span className="focus-input100"></span>
                            </div>
                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.phone?.type === "required" && <li>Vui l??ng nh???p sdt</li>}
                                {errors.phone?.type === "minLength" && <li>SDT kh??ng h???p l???</li>}
                            </div>

                        )}
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn">
                                    ????ng k??
                                </button>
                            </div>
                        </div>
                    </form>


                    <div className="flex-col-c p-t-70">
                        <span className="txt1 p-b-17">
                            ???? c?? t??i kho???n ?
                        </span>

                        <Link to="/login" className="txt2">
                            ????ng nh???p
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Register;