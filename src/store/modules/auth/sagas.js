// call chama uma função assíncrona
// put envia uma ação para o Redux
// all permite executar múltiplas sagas em paralelo
// takeLatest escuta a última ação disparada e ignora as anteriores
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// função geradora que lida com a ação de clicar no botão
function* loginRequest({ payload }) {
   try {
      const response = yield call(axios.post, '/tokens', payload);
      yield put(
         actions.loginSuccess({
            token: response.data.token,
            user: response.data.user, // inclui user corretamente
         }),
      );

      toast.success('Login realizado com sucesso!');

      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`; // define o token no cabeçalho padrão do axios
      history.push(payload.prevPath || '/'); // redireciona o usuário para a página anterior ou para a home
   } catch (error) {
      toast.error('Usuário ou senha inválidos');

      yield put(actions.loginFail());
   }
}

function persistRehydrate({ payload }) {
   const token = get(payload, 'auth.token');
   if (!token) return;
   axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
   const { id, nome, email, password } = payload; // extrai os dados do payload
   try {
      if (id) {
         yield call(axios.put, '/users', {
            email,
            nome,
            password: password || undefined,
         });
         toast.success('Conta alterada com sucesso!');
         yield put(actions.registerUpdatedSuccess({ nome, email, password }));
      } else {
         yield call(axios.post, '/users', {
            email,
            nome,
            password,
         });
         toast.success('Conta criada com sucesso!');
         yield put(actions.registerCreatedSuccess({ nome, email, password }));
         history.push('/login');
      }
   } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      const status = get(e, 'response.status', 0);

      if (status === 401) {
         toast.error('Você precisa fazer login novamente.');
         yield put(actions.loginFail());
         return history.push('/login');
      }
      if (errors.length > 0) {
         errors.map((error) => toast.error(error));
      } else {
         toast.error('Erro desconhecido');
      }

      yield put(actions.registerFail());
   }
}

// exportando a saga que escuta a ação BOTAO_CLICADOREQUEST
// e chama a função exampleRequest quando essa ação é disparada
export default all([
   takeLatest(types.LOGIN_REQUEST, loginRequest),
   takeLatest(types.PERSISTREHYDRATE, persistRehydrate),
   takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
