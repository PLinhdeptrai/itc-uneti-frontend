import React from "react";
import { Login, Register, ForgotPassword, Score, HomePage, Public } from "./client/screen/indexscreen";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path/path";
import CourItem from "./Layouts/LayoutCour/CourItem";
import Login2 from "./client/screen/login/Login2";
function App() {

  return (

    <div>
      {/* <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<HomePage/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.REGISTER} element={<Register/>}/>
          <Route path={path.FORGOTPASSWORD} element={<ForgotPassword/>}/>
          <Route path={path.SCORE} element={<Score/>}/>
          <Route path={path.COURSE} element={<CourItem />}/>
        </Route>
      </Routes> */}
      <Login2></Login2>
    </div>
  );
}

export default App;
