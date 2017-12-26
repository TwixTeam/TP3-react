import React, { Component } from 'react';

import { Card, CardText, CardTitle, CardActions, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from "material-ui/RaisedButton";

class CustomerForm extends Component {

  constructor() {
    super();

    this.state = {
      'errorMessage': "", 
      'currentCustomer': {
        'customerId': null,
        'firstName': "",
        'lastName': "",
        'email': "",
        'address': {
          'address': "",
          'address2': "",
          'district': "",
          'postalCode': "",
          'cityId': 1,
          'phone' : "",
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Card style={{ textAlign: 'center' }}>
          <CardTitle>
            <h3>Customer Form</h3>
            <p>* Required field</p>
            
            {
              this.state.errorMessage &&
              <p>{this.state.errorMessage}</p>
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
              value={this.state.currentCustomer.firstName} 
              onChange={this.editFirstName} 
            />

            <TextField
              className="Left-Input" 
              hintText="LastName *"
              hintStyle={{color:'#ccc'}} 
              id={"2"} 
              type="text"
              value={this.state.currentCustomer.lastName} 
              onChange={this.editLastName} 
            />

            <TextField
              className="Right-Input" 
              hintText="Mail"
              hintStyle={{color:'#ccc'}} 
              id={"3"} 
              type="email"
              value={this.state.currentCustomer.email} 
              onChange={this.editMail} 
            />

            <TextField
              className="Right-Input" 
              hintText="Phone *"
              hintStyle={{color:'#ccc'}} 
              id={"4"} 
              type="phone"
              value={this.state.currentCustomer.address.phone} 
              onChange={this.editPhone} 
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
              value={this.state.currentCustomer.address.address} 
              onChange={this.editAddress} 
            />

            <TextField
              className="Left-Input" 
              hintText="Address2"
              hintStyle={{color:'#ccc'}} 
              id={"6"} 
              type="text"
              value={this.state.currentCustomer.address.address2} 
              onChange={this.editAddress2} 
            />

            <TextField
              className="Right-Input" 
              hintText="District *"
              hintStyle={{color:'#ccc'}} 
              id={"7"} 
              type="email"
              value={this.state.currentCustomer.address.district} 
              onChange={this.editDistrict} 
            />

            <TextField
              className="Right-Input" 
              hintText="PostalCode"
              hintStyle={{color:'#ccc'}} 
              id={"8"} 
              type="phone"
              value={this.state.currentCustomer.address.postalCode} 
              onChange={this.editPostalCode} 
            />

            <SelectField
              hintText="City *"
              value={this.state.value}
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
              value={this.state.value}
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
              label={this.state.currentCustomer.customerId ? "Edit" : "Add"}
              onClick={this.handleSubmit}
            />

            <RaisedButton
              type="submit"
              secondary
              label="Reset Form"
              onClick={this.resetForm}
            />
          </CardActions>
          <br/>
          <br/>
        </Card>
      </div>
    )
  }

  editFirstName = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        firstName: e.target.value
      }
    })
  }

  editLastName = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        lastName: e.target.value
      }
    })
  }

  editMail = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        email: e.target.value
      }
    })
  }

  editPhone = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          phone: e.target.value
        }
      }
    })
  }


  editAddress = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          address: e.target.value
        }
      }
    })
  }

  editAddress2 = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          address2: e.target.value
        }
      }
    })
  }

  editDistrict = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          district: e.target.value
        }
      }
    })
  }

  editPostalCode = (e) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          postalCode: e.target.value
        }
      }
    })
  }

  resetForm = () => {
    this.setState({
      'currentCustomer': {
        'customerId': null,
        'firstName': "",
        'lastName': "",
        'email': "",
        'address': {
          'address': "",
          'address2': "",
          'district': "",
          'postalCode': "",
          'cityId': 1,
          'phone' : "",
        }
      }
    })
  }

  handleSubmit = () => {
    this.state.currentCustomer.firstName && this.state.currentCustomer.lastName && this.state.currentCustomer.address.phone 
    && this.state.currentCustomer.address.address && this.state.currentCustomer.address.district
      ? this.props.handleSubmit(this.state.currentCustomer)
      : this.setState({errorMessage: "Please fill in all the required fileds : *"})
  }
}

export default CustomerForm;

