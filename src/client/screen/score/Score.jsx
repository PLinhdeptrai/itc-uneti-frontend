import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { MenuItem, TextField, Checkbox, Select } from '@mui/material';

const data = [
    {
        id: '1',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 3.5
    },
    {
        id: '2',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 8.5
    },
    {
        id: '3',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 7.5
    },
    {
        id: '4',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 9.5
    },
    {
        id: '5',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 5.5
    },
    {
        id: '6',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Nam Định',
        point: 9
    },
    {
        id: '7',
        name: {
            firstName: 'Đặng Phúc',
            lastName: 'Linh',
        },
        class: 'DHTI15A2HN',
        branch: 'East Daphne',
        department: 'Kentucky',
        basis: 'Hà Nội',
        point: 8
    },
];

function Example () {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'STT',
                enableSorting: false,
                enableColumnFilter: false,
            },
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                enableSorting: false,
                enableColumnFilter: false,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                enableSorting: false,
                enableColumnFilter: false,
            },
            {
                accessorKey: 'class', //normal accessorKey
                header: 'Lớp',
                enableSorting: false,
                Filter: ({ header }) => (
                    
                    <TextField
                        onChange={(e) =>
                            header.column.setFilterValue(e.target.value || undefined)
                        }
                        select
                        value={header.column.getFilterValue() ?? ''}
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
                // filterFn: (row, _columnIds, filterValue) =>
                //     row.getValue < string > ('basis').toLowerCase() ===
                //     filterValue.toLowerCase(),
            },
            {
                accessorKey: 'branch', //normal accessorKey
                header: 'Ngành',
                enableSorting: false,
                Filter: ({ header }) => (
                    <TextField
                        onChange={(e) =>
                            header.column.setFilterValue(e.target.value || undefined)
                        }
                        select
                        value={header.column.getFilterValue() ?? ''}
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
                // filterFn: (row, _columnIds, filterValue) =>
                //     row.getValue < string > ('basis').toLowerCase() ===
                //     filterValue.toLowerCase(),
            },
            {
                accessorKey: 'department',
                header: 'Khoa',
                enableSorting: false,
                Filter: ({ header }) => (
                    <TextField
                        onChange={(e) =>
                            header.column.setFilterValue(e.target.value || undefined)
                        }
                        select
                        value={header.column.getFilterValue() ?? ''}
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
                // filterFn: (row, _columnIds, filterValue) =>
                //     row.getValue < string > ('basis').toLowerCase() ===
                //     filterValue.toLowerCase(),
            },
            {
                accessorKey: 'basis',
                header: 'Cơ sở',
                enableSorting: false,
                Filter: ({ header }) => (
                    <TextField
                        onChange={(e) =>
                            header.column.setFilterValue(e.target.value || undefined)
                        }
                        select
                        value={header.column.getFilterValue() ?? ''}
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
                // filterFn: (row, _columnIds, filterValue) =>
                //     row.getValue < string > ('basis').toLowerCase() ===
                //     filterValue.toLowerCase(),

            },
            {
                accessorKey: 'point',
                header: 'Điểm',
                enableColumnFilter: false,

            },
        ],

        [],
    );

    return (

        <div >
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnActions={false}
                enablePagination={false}
                enableFullScreenToggle={false}
                initialState={{ showColumnFilters: true }}
                enableHiding={false}
                enableDensityToggle={false}


            />
        </div >
    )
};

export default Example;