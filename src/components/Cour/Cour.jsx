import React, { useState, useEffect } from "react";
import "../../asset/css/cour.css";
import "../../asset/css/GlobleStyle.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/slice/login";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Oop from "../../asset/image/Courses/Oop.jpg";
import Web from "../../asset/image/Courses/Web.jpg";
import Python from "../../asset/image/Courses/python.png";
function Cour() {
    const demoCourse = [
      {
        id: 1,
        img: Oop,
        nameCourse: "Lap Trinh Huong Doi Tuong",
        teacher: "Pham Thuy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 2,
        img: Web,
        nameCourse: "Lap Trinh Web",
        teacher: "Hai Long",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 3,
        img: Python,
        nameCourse: "Lap trinh voi Python",
        teacher: "Nguyen Van A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 4,
        img: Python,
        nameCourse: "Lap trinh voi Python",
        teacher: "Nguyen Van A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 5,
        img: Oop,
        nameCourse: "Lap Trinh Huong Doi Tuong",
        teacher: "Pham Thuy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 6,
        img: Web,
        nameCourse: "Lap Trinh Web",
        teacher: "Hai Long",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ];
  
  const Course = demoCourse;
  return (
    <div className="Cour">
      <div className="Title">
        <p>CÁC KHÓA HỌC</p>
      </div>
      <div className="ListCourse">
        {Course.map((value) => (
          <div key={value.id} className="card">
            <Link to={`/cour/${value.id}`} style={{ textDecoration: "none" }}>
              <img
                className="img-top"
                src={value.img}
                alt="error"
                height={220}
              ></img>
              <div className="body-card">
                <h4 className="nameCour">{value.nameCourse}</h4>
                <div className="flex-teach">
                  <div className="teacher">
                    <p className="p1-teacher">Người dạy: </p>
                    <p className="p2-teacher">{value.teacher}</p>
                  </div>
                  <Link
                    className="btn-view"
                    to={`/cour/${value.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cour;
