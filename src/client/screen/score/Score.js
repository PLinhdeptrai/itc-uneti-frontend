import React, { useState, useEffect } from "react";
import * as apis from "../../../apis/index.api";
import axios from "axios";
import "./Score.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  DataGrid,
  GridToolbar,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "idStudent",
    headerName: "Mã sinh viên",
    width: 150,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "fullName",
    headerName: "Họ và tên",
    width: 200,
    headerAlign: "center",
  },
  { field: "khoas", headerName: "Khóa", width: 100, headerAlign: "center" },
  {
    field: "nganh",
    headerName: "Ngành",
    width: 200,
    sortable: false,
    headerAlign: "center",
  },
  { field: "address", headerName: "Cơ Sở", width: 150, headerAlign: "center" },
  {
    field: "classz",
    headerName: "Lớp",
    width: 150,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "averageScore",
    headerName: "Điểm trung bình",
    width: 150,
    headerAlign: "center",
  },
];

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listSocres: [],
    };
  }

  async componentDidMount() {
    let res = await axios.get("http://localhost:8080/score/findAll");
    this.setState({
      listSocres: res && res.data && res.data.list ? res.data.list : [],
    });
  }

  render() {
    let { listSocres } = this.state;

    return (
      <div className="container score-user-container">
        <div> TABLE</div>

        <div className="table-score">
          <DataGrid
            components={{ Toolbar: GridToolbarFilterButton }}
            rows={listSocres}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[30]}
            disableColumnMenu
          />
        </div>
        {/* <div className="list-score">
          <table className="table-score">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Họ và tên</th>
                <th>Khóa</th>
                <th>Ngành</th>
                <th>Cơ sở</th>
                <th>Lớp</th>
                <th>Điểm</th>
              </tr>
            </thead>
            <tbody>
              {listSocres.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.idStudent}</td>
                  <td>{item.fullName}</td>
                  <td>{item.khoas}</td>
                  <td>{item.nganh}</td>
                  <td>{item.address}</td>
                  <td>{item.classz}</td>
                  <td>{item.averageScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    );
  }
}

export default Score;
