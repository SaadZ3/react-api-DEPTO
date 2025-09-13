import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   // se a rota é fechada e o usuário não está logado, redireciona para a página de login
   if (isClosed && !isLoggedIn) {
      return (
         <Redirect
            // prevPath é usado para redirecionar o usuário de volta à página que ele tentou acessar antes de fazer login
            to={{
               pathname: '/login',
               state: { prevPath: rest.location.pathname },
            }}
         />
      );
   }

   // eslint-disable-next-line react/jsx-props-no-spreading
   return <Route {...rest} component={Component} />;
}

// definindo propriedades padrão e tipos para o componente MyRoute
MyRoute.defaultProps = {
   isClosed: false,
};
MyRoute.propTypes = {
   component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
      .isRequired,
   isClosed: PropTypes.bool,
};
