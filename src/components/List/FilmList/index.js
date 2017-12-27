import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import Loader from "../../Loader";
import FilmListHelper from "../../../helpers/FilmListHelper";

const FilmList = (props) => (
  <div>
    <Loader {...props}>
      <Table
        height="300px"
        fixedHeader={true}
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              {
                props.rentals 
                  ? "Customer Rentals"
                  : "Available Films"
              }
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Release Year</TableHeaderColumn>
            <TableHeaderColumn>Rate</TableHeaderColumn>
            <TableHeaderColumn>  </TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody
          showRowHover={true}
          displayRowCheckbox={false}
        >
          {
            ((props.rentals && props.rentals.length > 0) || (props.films && props.films.length)) &&
            FilmListHelper.buildFilmList(props)
          }
        </TableBody>
      </Table>
    
  </Loader>
  </div>
)

export default FilmList;