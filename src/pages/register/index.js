import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/loading';

export default function Register() {
   const dispatch = useDispatch();
   const id = useSelector((state) => state.auth.user.id);
   const nomeStorage = useSelector((state) => state.auth.user.nome);
   const emailStorage = useSelector((state) => state.auth.user.email);
   const roleStorage = useSelector((state) => state.auth.user.role);
   const isLoading = useSelector((state) => state.auth.isLoading);

   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [role, setRole] = useState('');

   React.useEffect(() => {
      if (!id) return; // user is not logged
      setNome(nomeStorage);
      setEmail(emailStorage);
      setRole(roleStorage);
   }, [emailStorage, id, nomeStorage, roleStorage]);

   async function handleSubmit(event) {
      event.preventDefault();

      let formErrors = false; // nao existe erro ainda
      if (nome.length < 3 || nome.length > 255) {
         formErrors = true;
         toast.error('Nome deve ter entre 3 e 255 caracteres');
      }
      if (!isEmail(email)) {
         formErrors = true;
         toast.error('E-mail inválido');
      }
      if (!id && (password.length < 6 || password.length > 50)) {
         formErrors = true;
         toast.error('Senha deve ter entre 6 e 50 caracteres');
      }
      if (formErrors) return; // se tiver erro, nao envia o formulario

      dispatch(actions.registerRequest({ nome, email, password, id, role })); // envia a ação de registro
   }

   return (
      <Container>
         <Loading isLoading={isLoading} />

         <h1>{id ? 'Editar Dados' : 'Crie sua conta'}</h1>
         {/* eslint-disable-next-line react/jsx-no-bind */}
         <Form onSubmit={handleSubmit}>
            <label htmlFor="nome">
               Nome:
               <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
               />
            </label>
            <label htmlFor="email">
               E-mail:
               <input
                  type="email"
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
            Sou:
            <div>
               {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
               <label className={role === 'aluno' ? 'selected' : ''}>
                  <input
                     type="radio"
                     name="role"
                     value="aluno"
                     checked={role === 'aluno'}
                     onChange={(e) => setRole(e.target.value)}
                  />
                  Aluno
               </label>
               {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
               <label className={role === 'professor' ? 'selected' : ''}>
                  <input
                     type="radio"
                     name="role"
                     value="professor"
                     checked={role === 'professor'}
                     onChange={(e) => setRole(e.target.value)}
                  />
                  Professor
               </label>
            </div>
            <button type="submit">{id ? 'Alterar' : 'Cadastrar'}</button>
         </Form>
      </Container>
   );
}
