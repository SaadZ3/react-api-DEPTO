import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Switch, Btn } from './styled';

export default function SwitchScreen() {
   const location = useLocation();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   return (
      <Switch>
         <div className="navegation">
            <Btn>
               <Link
                  to="/consultar"
                  className={location.pathname === '/consultar' ? 'active' : ''}
               >
                  Consultar
               </Link>
            </Btn>
            <Btn>
               {!isLoggedIn ? (
                  <Link
                     to="/gerenciar"
                     className={
                        location.pathname === '/gerenciar' ? 'active' : ''
                     }
                  >
                     <FaLock /> Gerenciar
                  </Link>
               ) : (
                  <Link
                     to="/gerenciar"
                     className={
                        location.pathname === '/gerenciar' ? 'active' : ''
                     }
                  >
                     Gerenciar
                  </Link>
               )}
            </Btn>
         </div>
      </Switch>
   );
}
