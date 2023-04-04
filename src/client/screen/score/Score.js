import React, { useState, useEffect } from "react";
import * as apis from "../../../apis/index.api";
import axios from "axios";
import "./Score.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "idStudent", headerName: "Mã sinh viên", width: 150 },
  { field: "fullName", headerName: "Họ và tên", width: 150 },
  { field: "khoas", headerName: "Khóa", width: 70 },
  { field: "nganh", headerName: "Ngành", width: 200 },
  { field: "address", headerName: "Cơ Sở", width: 130 },
  { field: "classz", headerName: "Lớp", width: 130 },
  { field: "averageScore", headerName: "Điểm trung bình", width: 130 },
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
            rows={listSocres}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[30]}
            FilterButton
          />
        </div>
       
      </div>
    );
  }
}

export default Score;
