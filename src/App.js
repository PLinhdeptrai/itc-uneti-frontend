import React from "react";
import {
  Login,
  Register,
  ForgotPassword,
  Score,
  HomePage,
  Public,
} from "./client/screen/indexscreen";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path/path";
import CourItem from "./components/Layouts/LayoutCour/CourItem";
import NewsFit from "./components/Layouts/LayoutNews/NewsFit";
import ContestItem from "./components/Layouts/LayoutContest/ContestItem";
import DocumentItem from "./components/Layouts/LayoutDoc/DocumentItem";
import Admin from "./client/screen/admin/index";
import PostAdmin from "./client/screen/admin/post/post";
function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} />
        <Route path={path.HOME} element={<HomePage />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={path.SCORE} element={<Score />} />
        <Route path={path.COURSE} element={<CourItem />} />
        <Route path={path.CONTEST} element={<ContestItem />} />
        <Route path={path.NEWS} element={<NewsFit />} />
        <Route path={path.DOCUMENT} element={<DocumentItem />} />
        <Route path={path.ADMIN} element={<Admin />} />
        <Route path={path.ADMINPOST} element={<PostAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
