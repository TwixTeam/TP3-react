import axios from "axios";

const AuthService = {

  setToken: (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  },

  isLoggedIn: () => (
    !!localStorage.getItem('token')
  ),

  login: (user, password) => {
    return axios.post('/login', {
      username: user,
      password: password
    }).then(res => {
      AuthService.setToken(res.data);
    }).catch( error => {
      console.log(error);
    });
  },

  logout: () => {
    axios.defaults.headers.common['Authorization'] = null;
    localStorage.clear();
  }
};

export default AuthService;