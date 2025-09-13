// a função desse arquivo é juntar todos os reducers da aplicação
import { combineReducers } from 'redux';
import auth from './auth/reducer'; // importando o reducer do exemplo

export default combineReducers({
   auth, // combinando o reducer de autenticação
});
