import React, { Component } from 'react';

import CustomerList from "../../components/List/CustomerList";

import CustomerService from "../../services/customerService";


class CustomerListPage extends Component {

  constructor(){
    super();

    this.state = {
      error: false,
      loading: true,
      customers: []
    }
  }

  render() {
    return (
      <div>
        <CustomerList handleEditCustomer={this.handleEditCustomer} {...this.state} />
      </div>
    )
  }

  componentDidMount() {
    this.importCustomers();
  }

  importCustomers = () => {
    CustomerService.getAllCustomers().then(res => {
      console.log(res);
      this.setState({customers: res, loading:false});
    }).catch(err => {
      this.setState({open:true, result: "Network error: Cannot find customers", customers: [], error: true, loading:false});
    });
  }
  
  handleEditCustomer = () => {

  }
}

export default CustomerListPage;