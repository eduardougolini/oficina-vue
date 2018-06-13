import axios from 'axios';

export default {
  loginAction: ({commit}, {email, senha}) => {
    axios.post('http://oficina.oincriveleduardo.com.br/login',{
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
