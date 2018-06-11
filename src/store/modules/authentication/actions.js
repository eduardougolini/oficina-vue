import axios from 'axios';

export default {
  loginAction: ({commit}, {email, senha}) => {
    axios.post('http://localhost:3000/login',{
        email: email,
        senha: senha
    }).then(({data}) => {
        commit('SET_AUTHENTICATED', data.authenticated );
    });
  },

  logoutAction: ({commit}) => {
    commit('SET_AUTHENTICATED', false );
  }
}
