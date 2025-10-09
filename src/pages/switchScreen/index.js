import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
// import { useSelector, useDispatch } from 'react-redux';
import { Switch } from './styled';
import { Container } from '../../styles/globalStyles';

// eslint-disable-next-line import/no-cycle
import Consultar from '../consultar/index';
import Gerenciar from '../gerenciar/index';

// import * as actions from '../../store/modules/auth/actions';

export default function SwitchScreen() {
   const [activeScreen, setActiveScreen] = useState('');

   const changeScreen = (value) => {
      // Se clicar na mesma screen ativa, remove ela
      if (activeScreen === value) {
         setActiveScreen('');
      } else {
         setActiveScreen(value);
      }
   };

   return (
      <Container>
         <Switch>
            <div className="navegation">
               <button
                  type="button"
                  className={`btnConsultar ${activeScreen === 'consultar' ? 'active' : ''}`}
                  onClick={() => changeScreen('consultar')}
               >
                  Consultar
               </button>
               <button
                  type="button"
                  className={`btnGerenciar ${activeScreen === 'gerenciar' ? 'active' : ''}`}
                  onClick={() => changeScreen('gerenciar')}
               >
                  Gerenciar
               </button>
            </div>
         </Switch>
         {activeScreen === 'consultar' && <Consultar />}
         {activeScreen === 'gerenciar' && <Gerenciar />}
      </Container>
   );
}
