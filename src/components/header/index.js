import React from 'react';
import { FaHome, FaCircle, FaPowerOff } from 'react-icons/fa';
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
            <FaHome size={24} />
         </Link>

         <div>
            {isLoggedIn ? (
               <Link onClick={handleLogout} to="/logout">
                  <FaPowerOff size={24} />
               </Link>
            ) : (
               <Link to="/login">
                  <p>Login</p>
               </Link>
            )}
            <Link to="/register">
               <p>Register</p>
            </Link>

            {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
         </div>
      </Nav>
   );
}
