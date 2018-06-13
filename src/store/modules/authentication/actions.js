import axios from 'axios';
import swal from 'sweetalert';

export default {
  loginAction: ({commit}, {email, senha}) => {
    axios.post('http://oficina.oincriveleduardo.com.br/login',{
        email: email,
        senha: senha
    }).then(({data}) => {
        commit('SET_AUTHENTICATED', data.authenticated );
    }, () => {
      swal('Deu ruim', 'Errou o usuário ou a senha', 'error');
    });
  },

  logoutAction: ({commit}) => {
    commit('SET_AUTHENTICATED', false );
  }
}
