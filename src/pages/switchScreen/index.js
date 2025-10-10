import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Btn } from './styled';

export default function SwitchScreen() {
   const location = useLocation();

   return (
      <Switch>
         <div className="navegation">
            <Btn>
               <Link
                  to="/consultar"
                  className={
                     location.pathname === '/consultar' ? 'active' : ''
                  }
               >
                  Consultar
               </Link>
            </Btn>
            <Btn>
               <Link
                  to="/gerenciar"
                  className={
                     location.pathname === '/gerenciar' ? 'active' : ''
                  }
               >
                  Gerenciar
               </Link>
            </Btn>
         </div>
      </Switch>
   );
}

