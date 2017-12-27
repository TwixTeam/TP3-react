import React from 'react';

import { Card, CardText, CardTitle, CardActions, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from "material-ui/RaisedButton";

const CustomerForm = (props) => (
  <div>
    <Card style={{ textAlign: 'center' }}>
      <CardTitle>
        <h3>Customer Form</h3>
        <p>* Required field</p>
        
        {
          props.errorMessage &&
          <p>{props.errorMessage}</p>
        }
      </CardTitle>

      <CardHeader>
        <h3>Identity</h3>
      </CardHeader>

      <CardText>
        <TextField
          className="Left-Input" 
          hintText="FirstName *"
          hintStyle={{color:'#ccc'}} 
          id={"1"} 
          type="text"
          value={props.currentCustomer.firstName} 
          onChange={(e) => props.editFirstName(e.target.value.toUpperCase())} 
        />

        <TextField
          className="Left-Input" 
          hintText="LastName *"
          hintStyle={{color:'#ccc'}} 
          id={"2"} 
          type="text"
          value={props.currentCustomer.lastName} 
          onChange={(e) => props.editLastName(e.target.value.toUpperCase())} 
        />

        <TextField
          className="Right-Input" 
          hintText="Mail"
          hintStyle={{color:'#ccc'}} 
          id={"3"} 
          type="email"
          value={props.currentCustomer.email} 
          onChange={(e) => props.editMail(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="Phone *"
          hintStyle={{color:'#ccc'}} 
          id={"4"} 
          type="phone"
          value={props.currentCustomer.address.phone} 
          onChange={(e) => props.editPhone(e.target.value)} 
        />

        <CardHeader>
          <h3>Address</h3>
        </CardHeader>

        <TextField
          className="Left-Input" 
          hintText="Address *"
          hintStyle={{color:'#ccc'}} 
          id={"5"} 
          type="text"
          value={props.currentCustomer.address.address} 
          onChange={(e) => props.editAddress(e.target.value)} 
        />

        <TextField
          className="Left-Input" 
          hintText="Address2"
          hintStyle={{color:'#ccc'}} 
          id={"6"} 
          type="text"
          value={props.currentCustomer.address.address2} 
          onChange={(e) => props.editAddress2(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="District *"
          hintStyle={{color:'#ccc'}} 
          id={"7"} 
          type="email"
          value={props.currentCustomer.address.district} 
          onChange={(e) => props.editDistrict(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="PostalCode"
          hintStyle={{color:'#ccc'}} 
          id={"8"} 
          type="phone"
          value={props.currentCustomer.address.postalCode} 
          onChange={(e) => props.editPostalCode(e.target.value)} 
        />

        <SelectField
          hintText="City *"
          value={""}
          onChange={this.editCity}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>

        <SelectField
          hintText="Country *"
          value={""}
          onChange={this.editCountry}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </CardText>

      <CardActions>
        <RaisedButton
          type="submit"
          primary
          label={props.currentCustomer.customerId ? "Edit" : "Add"}
          onClick={() => props.handleSubmit()}
        />

        <RaisedButton
          type="submit"
          secondary
          label="Reset Form"
          onClick={() => props.resetForm()}
        />
      </CardActions>
      <br/>
      <br/>
    </Card>
  </div>
)

export default CustomerForm;

