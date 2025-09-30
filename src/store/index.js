// redux é uma biblioteca para gerenciar o estado da aplicação, aqui que é feita a store e o controle dos estados
// o redux é utilizado para se fazer alteraçoes em um estado global da aplicação (exemplo: logado ou nao, carrinho de compras, etc)
import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPresist'; // importa o arquivo que faz a persistencia do redux
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   persistedReducers(rootReducer),
   applyMiddleware(sagaMiddleware), // cria a store com o reducer e o middleware
);

sagaMiddleware.run(rootSaga); // executa o rootSaga, que é a função que combina todos os sagas da aplicação
export const persistor = persistStore(store); // cria o persistor, que é o responsável por salver os dados no localStorage
export default store;
