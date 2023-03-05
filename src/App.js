import React, { useState } from "react";
import { Login, Register, ForgotPassword, Score, HomePage, Public } from "./client/screen/indexscreen";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path/path";

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
          {/* <Route path='./' element={<Score/>}/> */}
        </Route>
      </Routes>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
