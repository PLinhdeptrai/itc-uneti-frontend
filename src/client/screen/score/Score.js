import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import "./Score.css";
import { Header, Footer } from "../../../components/index.component";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../redux/slice/login";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { MenuItem, TextField } from "@mui/material";
//nested data is ok, see accessorKeys in ColumnDef below

function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(loginSelector.currentUser);
  const token = useSelector(loginSelector.currentToken);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user === null) {
      swal({
        title: "Vui lòng đăng nhập để xem điểm",
        text: "",
        icon: "warning",
        button: "OK",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [user, location]);

  useEffect(() => {
    const getTableData = async () => {
      await axios
        .get("http://localhost:8080/api/score/user/findAll", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setData(res.data.list);
        });
    };
    getTableData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false,
      },
      {
        accessorKey: "idStudent",
        header: "Mã sinh viên",
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "fullName",
        header: "Họ và tên",
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "khoas",
        header: "Khóa",
      },
      {
        accessorKey: "nganh",
        header: "Ngành",
      },
      {
        accessorKey: "address",
        header: "Cơ sở",
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            {/*@ts-ignore*/}
            <MenuItem value={null}>All</MenuItem>
            <MenuItem value="HaNoi">Hà Nội</MenuItem>
            <MenuItem value="NamDinh">Nam Định</MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "classz",
        header: "Lớp",
      },
      {
        accessorKey: "averageScore",
        header: "Điểm trung bình",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <div className="container-score">
      <Header></Header>
      <div className="container-scores">
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          enableFullScreenToggle={false}
          initialState={{ showColumnFilters: true }}
          enableHiding={false}
          enableDensityToggle={false}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Example;
