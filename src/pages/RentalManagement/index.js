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
          isRental={true}
          rentals={this.state.rentals}
        />

        <br/>
        <br/>

        <FilmList 
          onCreateRental={this.onCreateRental}
          error={this.state.errorFilms}
          loading={this.state.loadingFilms}
          isRental={false}
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
    });

    if(this.props.location.state) {
      this.setState({selectedCustomerId: this.props.location.state.customerId})
      this.getRentalsAndFilmsFromCustomer(this.props.location.state.customerId)
    }
  }

  onSelectCustomer = (customerId) => {
    this.setState({selectedCustomerId: customerId, loadingRentals: true, loadingFilms:true});

    this.getRentalsAndFilmsFromCustomer(customerId)
  }

  onCreateRental = (filmId) => {
    RentalService.createRental(this.state.selectedCustomerId, filmId).then(res => {
      this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId);
    }).catch(err => {
      console.log(err)
    });
    this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId)
  }

  onUpdateRental = (filmId) => {
    RentalService.updateRental(this.state.selectedCustomerId, filmId).then(res => {
      this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId);
    }).catch(err => {
      console.log(err)
    });

  }

  getRentalsAndFilmsFromCustomer = (customerId) => {
    this.setState({loadingRentals: true, loadingFilms:true})

    RentalService.getCustomerRentals(customerId).then(res => {
      this.setState({rentals: res, loadingRentals:false});
    }).catch(err => {
      this.setState({rentals: [], errorRentals: true, loadingRentals:false});
    });

    RentalService.getNoRentedFilms(customerId).then(res => {
      this.setState({films: res, loadingFilms:false});
    }).catch(err => {
      this.setState({films: [], errorFilms: true, loadingFilms:false});
    });
  }
}

export default RentalManagement;