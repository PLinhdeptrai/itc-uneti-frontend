import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { async } from "q";
import axios from "axios";

//nested data is ok, see accessorKeys in ColumnDef below

function Example() {
  const [data, setData] = useState([]);
  const getTableData = async () => {
    await axios.get("http://localhost:8080/score/findAll").then((res) => {
      setData(res.data.list);
    });
  };
  useEffect(() => {
    getTableData();
  }, []);
  console.log(data);
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "idStudent",
        header: "Mã sinh viên",
      },
      {
        accessorKey: "fullName",
        header: "Họ và tên",
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
        header: "Address",
      },
      {
        accessorKey: "classz",
        header: "Lớp",
      },
      {
        accessorKey: "averageScore",
        header: "Điểm trung bình",
      },
    ],
    []
  );

  return (
    <div className="container">
      <MaterialReactTable columns={columns} data={data} />;
    </div>
  );
}

export default Example;
