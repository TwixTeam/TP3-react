import axios from "axios";

const CustomerService = {

  getAllCustomers: () => {
    return axios.get('/customer/')
      .then(res => res.data)
      .catch(error => error);
  },

  createCustomer: (customer) => {
    return axios.post('/customer/', customer)
      .then(res => res.data)
      .catch(error => error)
  },

  updateCustomer: (customer) => {
    console.log(customer)
    return axios.put('/customerUpdate/', customer)
      .then(res => res.data)
      .catch(error => error)
  }
}

export default CustomerService;