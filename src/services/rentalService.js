import axios from "axios";

const RentalService = {

  getCustomerRentals: (customerId) => {
    return axios.get(`/customerRentals/${customerId}`)
      .then(res => res.data)
      .catch(error => error);
  },

  getNoRentedFilms: (customerId) => {
    return axios.get(`/availableFilms/${customerId}`)
      .then(res => res.data)
      .catch(error => error);
  },

  createRental: (ids) => {
    return axios.post(`/rental/${ids}`)
      .then(res => res.data)
      .catch(error => error);
  },

  updateRental: (ids) => {
    return axios.put(`/rentalUpdate/${ids}`)
      .then(res => res.data)
      .catch(error => error);
  }
}

export default RentalService;