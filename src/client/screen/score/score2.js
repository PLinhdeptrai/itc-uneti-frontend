import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { async } from "q";
import axios from "axios";
import { sort } from "semver";

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
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        align: "center",
        sorting:  false
      },
      {
        accessorKey: "idStudent",
        header: "Mã sinh viên",
        
      },
      {
        accessorKey: "fullName",
        header: "Họ và tên",
        align: "center"
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
    <div className="">
      <MaterialReactTable
        columns={columns}
        data={data}
        
        // enableColumnActions={false}
        // enablePagination={false}
        // // enableFullScreenToggle={false}
        // // initialState={{ showColumnFilters: true }}
        // enableHiding={false}
        // // enableDensityToggle={false}
        
      />
    </div>
  );
}

export default Example;
