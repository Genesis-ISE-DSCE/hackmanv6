import React, { useEffect, useState } from 'react';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';
import { useLocation, useNavigate } from "react-router-dom"
import Axios from 'axios';
import './table.css'

function MyTableComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const authenticated = location.state;
  const [dat, setDat] = useState([
    {
      college: "daka",
      email: "dinesh1x@gmail.com",
      name: "heisdinesh",
      phone: "7337735382",
      teamEmail: ['s@gmail.com', 'dyfgyucb@gmail.com'],
      teamId: "hackman1684142197776",
      teamMembers: ['s', 'bdebhbk'],
      teamName: "think\\_tank",
      teamPhone: ['489652332', '87526'],
      transactionID: "dedewfewgfbwef",
      upiID: "frhfbrfrifr"
    }
  ]);


  const [recieved, setRecieved] = useState(false);
  useEffect(() => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    // console.log(userToken)
    // Axios.get("http://localhost:4000/api/v1/registration",
    //  { headers: {"Authorization" : userToken}} )
    Axios.get("https://hackmanv6.onrender.com/api/v1/registration", { headers: { "Authorization": userToken } })
      .then(response => {
        // Update the data array or state variable with the fetched data
        // Example: setData(response.data)
        const updatedData = response.data.map((item, index) => {
          return {
            ...item,
            count: index + 1,
          };
        });
        setDat(updatedData);
        setRecieved(true);
        setCount(response.data.length);
        // console.log("authenticated")
        // console.log(response.data)
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Number',
        accessor: 'count',
        Cell: ({ row }) => row.index + 1,
      },
      // {
      //   Header: 's.no',
      //   accessor: 'teamNumber',
      // },
      {
        Header: 'Team Name',
        accessor: 'teamName',
      },
      {
        Header: 'TeamId',
        accessor: 'teamId',
      },
      {
        Header: 'College',
        accessor: 'college',
      },
      {
        Header: 'Leader',
        accessor: 'name'
      },
      {
        Header: 'Team Members',
        accessor: 'teamMembers'
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Team Phone',
        accessor: 'teamPhone'
      }, {
        Header: 'Team Email',
        accessor: 'teamEmail'
      },
      {
        Header: 'Transaction ID',
        accessor: 'transactionID'
      }, {
        Header: 'Upi ID',
        accessor: 'upiID'
      },
    ],
    [dat]
  )

  const data = React.useMemo(
    () => dat,
    [dat]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>{
      true ? <div>
        {recieved ? <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td {...cell.getCellProps()} key={cellIndex}>
                      {Array.isArray(cell.value) ? cell.value.join(", ") : cell.value}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table> : <p>Loading please wait......</p>}
      </div> : <p>login first</p>
    }
    </>
  );
}


export default MyTableComponent
