import React from 'react';
import {
   FaCircle,
   FaPowerOff,
   FaBuilding,
   FaSearch,
   FaSignInAlt,
} from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from './styled';

import * as actions from '../../store/modules/auth/actions';

export default function Header() {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   const history = useHistory();

   const handleLogout = (e) => {
      e.preventDefault();
      dispatch(actions.loginFail());
      history.push('/');
   };

   return (
      <Nav>
         <Link to="/">
            <div className="logo">
               <FaBuilding size={28} />
               <h1>GuiaDepto</h1>
            </div>
         </Link>

         <div>
            <Link to="/consultar" className="nav-link">
               <FaSearch /> Consultar
            </Link>
            {isLoggedIn ? (
               <Link
                  onClick={handleLogout}
                  to="/logout"
                  className="nav-link-login"
               >
                  <FaPowerOff /> Sair
               </Link>
            ) : (
               <Link to="/login" className="nav-link-login">
                  <FaSignInAlt /> Login
               </Link>
            )}
            {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
         </div>
      </Nav>
   );
}
