import React, { useEffect ,useState} from 'react';
import styled from 'styled-components'
import { useTable,useBlockLayout, useResizeColumns } from 'react-table';
import Axios from 'axios';
import './table.css'

function MyTableComponent() {
  const [dat,setDat]=useState([
    {
      college : "daka",
      email : "dinesh1x@gmail.com",
      name : "heisdinesh",
      phone: "7337735382",
      teamEmail: ['s@gmail.com', 'dyfgyucb@gmail.com'],
      teamId: "hackman1684142197776",
      teamMembers : ['s', 'bdebhbk'],
      teamName: "think\\_tank",
      teamPhone:['489652332', '87526'],
      transactionID: "dedewfewgfbwef",
      upiID: "frhfbrfrifr"
    }
  ]);
  
  
  const [recieved,setRecieved]=useState(false);
  useEffect(() => {
    // Axios.get("http://localhost:4000/api/v1/registration")
    Axios.get("https://hackmanv6.onrender.com/api/v1/registration")
      .then(response => {
        // Update the data array or state variable with the fetched data
        // Example: setData(response.data)
        setDat(response.data)
        setRecieved(true);
        console.log(response.data)
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 's.no',
        accessor: 'teamNumber', // accessor is the "key" in the data
      },
      {
        Header: 'teamName',
        accessor: 'teamName', // accessor is the "key" in the data
      },
      {
        Header: 'teamId',
        accessor: 'teamId', // accessor is the "key" in the data
      },
      {
        Header: 'college',
        accessor: 'college', // accessor is the "key" in the data
      },
      {
        Header:'teamMembers',
        accessor:'teamMembers'
      },
      {
        Header: 'email',
        accessor: 'email', // accessor is the "key" in the data
      },
      {
        Header: 'phone',
        accessor: 'phone', // accessor is the "key" in the data
      },
      {
        Header:'teamPhone',
        accessor:'teamPhone'
      },{
        Header:'teamEmail',
        accessor:'teamEmail'
      },
      {
        Header:'transactionID',
        accessor:'transactionID'
      },{
        Header:'upiID',
        accessor:'upiID'
      },
      
      // {
      //   Header: 'Column 2',
      //   accessor: 'col2',
      // },
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
   <div>
    {recieved &&  <table {...getTableProps()}>
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
        {rows.map((row,rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell,cellIndex) => (
                <td {...cell.getCellProps()} key={cellIndex}>
                  {Array.isArray(cell.value) ? cell.value.join(", ") : cell.value}
                  </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>}
   </div>
  );
}


export default MyTableComponent