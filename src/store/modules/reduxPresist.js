// redux-persist é uma biblioteca que permite armazenar o estado da aplicação no armazenamento local do navegador,
// garantindo que os dados persistam mesmo após o recarregamento da página.
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
   const persistedReducers = persistReducer(
      {
         key: 'CONSUMO-API', // nome da aplicação
         storage, // tipo de armazenamento utilizado, neste caso o localStorage
         whitelist: ['auth'], // recebe apenas os reducers que você deseja salvar
      },
      reducers,
   );

   return persistedReducers;
};
