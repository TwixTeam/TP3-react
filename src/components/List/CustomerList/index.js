import React from 'react';

import RaisedButton from "material-ui/RaisedButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Loader from "../../Loader";

const CustomerList = (props) => (
  <div>
    <Loader error={props.error} loading={props.loading}>
      <Table
        height="600px"
        fixedHeader={true}
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              Customer List
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Last name, First name</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Mail</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>  </TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody
          showRowHover={true}
          displayRowCheckbox={false}
        >
          {
            props.customers.length > 0 &&
            props.customers.map( (customer) => (
              <TableRow key={customer.customerId}>
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.customerId}</TableRowColumn>
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.lastName} {customer.firstName}</TableRowColumn>
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.address.phone}</TableRowColumn>
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.email}</TableRowColumn>
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.address.address}, {customer.address.address2}, {customer.address.district}, {customer.address.postalCode}</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton 
                    id={customer.customerId}
                    label="Edit"
                    onClick={() => props.handleEditCustomer(customer)}
                    primary={true}  
                  />

                  <RaisedButton 
                    label="Rentals"
                    onClick={this.handleRental}
                    secondary={true}  
                  />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Loader>
  </div>
);

export default CustomerList;