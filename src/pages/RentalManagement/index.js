import React, { Component } from 'react';

import SelectCustomerForm from "../../components/Form/SelectCustomerForm";
import FilmList from "../../components/List/FilmList";


import CustomerService from "../../services/customerService";
import RentalService from "../../services/rentalService";


class RentalManagement extends Component {

  constructor() {
    super();

    this.state = {
      errorForm: false,
      loadingForm: true,
      errorRentals: false,
      loadingRentals: false,
      errorFilms: false,
      loadingFilms: false,

      selectedCustomerId: "",
      customers:[],
      rentals:[],
      films:[]
    }
  }

  render() {
    return (
      <div>
        <SelectCustomerForm
          onSelectCustomer={this.onSelectCustomer}
          error={this.state.errorForm}
          loading={this.state.loadingForm}
          {...this.state}
        />

        <br/>

        <FilmList 
          onUpdateRental={this.onUpdateRental}
          error={this.state.errorRentals}
          loading={this.state.loadingRentals}
          rentals={this.state.rentals}
        />

        <br/>

        <FilmList 
          onCreateRental={this.onCreateRental}
          error={this.state.errorFilms}
          loading={this.state.loadingFilms}
          films={this.state.films}
        />
      </div>
    )
  }

  componentDidMount() {
    CustomerService.getAllCustomers().then(res => {
      res.length > 0
        ? this.setState({customers: res, loadingForm:false})
        : this.setState({errorForm:true, loadingForm:false})
    }).catch(err => {
      this.setState({customers: [], error: true, loading:false});
    });

    if(this.props.location.state) {
      this.setState({selectedCustomerId: this.props.location.state.selectedCustomerId})
      this.getRentalsAndFilmsFromCustomer(this.props.location.state.selectedCustomerId)
    }
  }

  onSelectCustomer = (customerId) => {
    this.setState({selectedCustomerId: customerId});

    this.getRentalsAndFilmsFromCustomer(customerId)
  }

  onCreateRental = (filmId) => {
    RentalService.createRental(this.state.selectedCustomerId, filmId).then(res => {
      console.log(res)
      //this.setState({rentals: res, loadingRentals:false});
    }).catch(err => {
      console.log(err)
    });
    this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId)
  }

  onUpdateRental = (filmId) => {
    RentalService.updateRental(this.state.selectedCustomerId, filmId).then(res => {
      console.log(res)
      //this.setState({rentals: res, loadingRentals:false});
    }).catch(err => {
      console.log(err)
    });

    this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId)
  }

  getRentalsAndFilmsFromCustomer = (customerId) => {
    RentalService.getCustomerRentals(customerId).then(res => {
      console.log(res)
      //this.setState({rentals: res, loadingRentals:false});
    }).catch(err => {
      this.setState({rentals: [], errorRentals: true, loadingRentals:false});
    });

    RentalService.getNoRentedFilms(customerId).then(res => {
      console.log(res)
      //this.setState({films: res, loadingFilms:false});
    }).catch(err => {
      this.setState({films: [], errorFilms: true, loadingFilms:false});
    });
  }
}

export default RentalManagement;