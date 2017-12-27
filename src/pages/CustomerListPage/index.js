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
    CustomerService.getAllCustomers().then(res => {
      this.setState({customers: res, loading:false});
    }).catch(err => {
      this.setState({open:true, result: "Network error: Cannot find customers", customers: [], error: true, loading:false});
    });
  }
  
  handleEditCustomer = (customer) => {
    this.props.history.push({
      pathname: '/',
      state: { user: customer }
    })
  }
}

export default CustomerListPage;