import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
   isLoggedIn: false,
   token: false,
   user: {},
   isLoading: false,
};

// reducer é uma função que recebe o estado atual e uma ação, e retorna o novo estado
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
   switch (action.type) {
      case types.LOGIN_SUCCESS: {
         const newState = { ...state };
         newState.isLoggedIn = true; // usuário está logado
         newState.token = action.payload.token; // armazena o token
         newState.user = action.payload.user; // armazena os dados do usuário
         newState.isLoading = false; // indica que o login foi concluído
         return newState;
      }
      case types.LOGIN_FAIL: {
         delete axios.defaults.headers.Authorization; // Isso garante que usuários que façam login e depois logout, não permaneçam com token ativo após o logout.
         const newState = { ...initialState };
         return newState; // reseta o estado para o inicial em caso de falha no login
      }
      case types.LOGIN_REQUEST: {
         const newState = { ...state };
         newState.isLoading = true; // indica que o login está em progresso
         return newState; // reseta o estado para o inicial em caso de falha no login
      }

      case types.REGISTER_UPDATED_SUCCESS: {
         const newState = { ...state };
         newState.user.nome = action.payload.nome;
         newState.user.email = action.payload.email;
         newState.isLoading = false;
         return newState; // reseta o estado para o inicial em caso de falha no login
      }

      case types.REGISTER_CREATED_SUCCESS: {
         const newState = { ...state };
         newState.isLoading = false;
         return newState; // reseta o estado para o inicial em caso de falha no login
      }
      case types.REGISTER_FAIL: {
         const newState = { ...state };
         newState.isLoading = false;
         return newState; // reseta o estado para o inicial em caso de falha no login
      }
      case types.REGISTER_REQUEST: {
         const newState = { ...state };
         newState.isLoading = true;
         return newState; // reseta o estado para o inicial em caso de falha no login
      }

      default:
         return state;
   }
}
