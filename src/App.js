import React from "react";
import { Login, Register, ForgotPassword, Score, HomePage, Public } from "./client/screen/indexscreen";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path/path";
import LoginApi from './client/screen/login/LoginApi';
import CourItem from "./Layouts/LayoutCour/CourItem";
function App() {

  return (

    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<HomePage/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.REGISTER} element={<Register/>}/>
          <Route path={path.FORGOTPASSWORD} element={<ForgotPassword/>}/>
          <Route path={path.SCORE} element={<Score/>}/>
          <Route path={path.COURSE} element={<CourItem />}/>
          {/* <Route path='./' element={<Score/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
