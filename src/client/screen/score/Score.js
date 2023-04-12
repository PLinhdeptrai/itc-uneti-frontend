import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import "./Score.css";
import { Header, Footer } from "../../../components/index.component";
//nested data is ok, see accessorKeys in ColumnDef below

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTableData = async () => {
      await axios
        .get("http://localhost:8080/api/score/user/findAll")
        .then((res) => {
          setData(res.data);
        });
    };
    getTableData();
  });

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
