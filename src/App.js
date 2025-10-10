import React from 'react';
import { Router } from 'react-router-dom'; // importando o Router do react-router-dom
import { ToastContainer } from 'react-toastify'; // importando o ToastContainer para exibir notificações
import { Provider } from 'react-redux'; // importando o provider do react-redux para conectar a store ao React
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store'; // importando a store que foi criada
import GlobalStyles from './styles/globalStyles'; // todo componente do react deve ser importado com letra maiúscula
import history from './services/history'; // importando o history que foi criado para gerenciar o histórico de navegação
import Header from './components/header';
import ChangeScreen from './pages/switchScreen';
import Routes from './routes';

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router history={history}>
               <Header />
               <Routes />
               <GlobalStyles />
               <ToastContainer autoClose={3000} classname="toast-container" />
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;

