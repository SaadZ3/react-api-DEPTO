import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/globalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/loading';

export default function Login(props) {
   const dispatch = useDispatch(); // disparador de ações

   const prevPath = get(props, 'location.state.prevPath', '/'); // pega o caminho anterior, se n existr vai pra home

   const isLoading = useSelector((state) => state.auth.isLoading); // pega o loading do estado global

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function handleSubmit(event) {
      event.preventDefault();

      let formErrors = false; // nao existe erro ainda
      if (!isEmail(email)) {
         formErrors = true;
         toast.error('E-mail inválido');
      }
      if (password.length < 6 || password.length > 50) {
         formErrors = true;
         toast.error('Senha Inválida');
      }
      if (formErrors) return; // se tiver erro, nao envia o formulario

      dispatch(actions.loginRequest({ email, password, prevPath }));
   }

   return (
      <Container>
         <Loading isLoading={isLoading} />
         <h1>Login</h1>
         {/* eslint-disable-next-line react/jsx-no-bind */}
         <Form onSubmit={handleSubmit}>
            <label htmlFor="email">
               E-mail:
               <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
               />
            </label>
            <label htmlFor="senha">
               Senha:
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
               />
            </label>
            <button type="submit">Entrar</button>
         </Form>
      </Container>
   );
}
