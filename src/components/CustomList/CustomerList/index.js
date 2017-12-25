import React from 'react';

import RaisedButton from "material-ui/RaisedButton";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    name: 'John Smith',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Randal White',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Stephanie Sanders',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Steve Brown',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Joyce Whitten',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Samuel Roberts',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
  {
    name: 'Adam Moore',
    mail: "aa@aa.fr",
    phone: "08874589459",
    address: "ikjw 234 rfrgg"
  },
];

const CustomerList = (props) => (
  <div>
    <Table
      height={"600"}
      fixedHeader={true}
      selectable={false}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn colSpan="7" style={{textAlign: 'center'}}>
            Customer List
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Last name, First name</TableHeaderColumn>
          <TableHeaderColumn>Mail</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
          <TableHeaderColumn>Edit</TableHeaderColumn>
          <TableHeaderColumn>Rentals</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={true}
        displayRowCheckbox={false}
      >
        {tableData.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.mail}</TableRowColumn>
            <TableRowColumn>{row.phone}</TableRowColumn>
            <TableRowColumn>{row.address}</TableRowColumn>
            <TableRowColumn><RaisedButton /></TableRowColumn>
            <TableRowColumn><RaisedButton /></TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  </div>
);

export default CustomerList;