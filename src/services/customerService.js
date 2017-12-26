import axios from "axios";

const CustomerService = {

  getAllCustomers: () => {
    return axios.get('/customer/')
      .then(res => res.data)
      .catch(error => error);
  },

  createCustomer: (customerWO) => {
    return axios.post('/customer/', {...customerWO})
      .then(res => res.data)
      .catch(error => error)
  },

  updateCustomer: (customer) => {
    return axios.put('/customerUpdate/', customer)
      .then(res => res.data)
      .catch(error => error)
  }
}

export default CustomerService;