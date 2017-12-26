import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';

import CustomerForm from "../../components/Form/CustomerForm";

import CustomerService from "../../services/customerService";

class CustomerManagement extends Component {

  constructor() {
    super();

    this.state= {
      errorMessage: "",
      open: false,
      result: "",
    };
  }

  render() {
    return (
      <div>
        <CustomerForm handleSubmit={this.handleSubmit} />
        <br />

        <Snackbar
          open={this.state.open}
          message={this.state.result}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }

  

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleSubmit = (customer) => {
    console.log(customer)
    customer.customerId 
      ? CustomerService.updateCustomer(customer).then(res => {
        this.setState({open: true, result: "Update customer : Success"})
      }).catch(err => {
        this.setState({open: true, result: "Update customer: Fail"})
      })

      : CustomerService.createCustomer().then(res => {
        console.log(res)
        this.setState({open: true, result: "Create new customer: Success"})
      }).catch(err => {
        this.setState({open: true, result: "Create new customer: Fail"})
      })
  }
}

export default CustomerManagement;