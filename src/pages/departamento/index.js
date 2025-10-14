import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { isEmail } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import { Container } from '../../styles/globalStyles';
import { Form, Title } from './styled';
import Loading from '../../components/loading/index';
import * as actions from '../../store/modules/auth/actions';

export default function Departamento({ match, history }) {
   const dispatch = useDispatch();

   const id = get(match, 'params.id', '');
   const [titulo, setTitulo] = useState('');
   const [textoPrinc, setTextoPrinc] = useState('');
   const [ramal, setRamal] = useState('');
   const [email, setEmail] = useState('');
   const [funcionarios, setFuncionarios] = useState('');

   const [andar, setAndar] = useState('Térreo'); // Valor padrão para o select
   const [complemento, setComplemento] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const andaresOptions = [
      '1º Sub-solo',
      'Térreo',
      '1º Andar',
      '2º Andar',
      '3º Andar',
      '4º Andar',
      '5º Andar',
      '6º Andar',
      '7º Andar',
      '8º Andar',
      '9º Andar',
      '10º Andar',
   ];
   // useEffect é para preencher os dados antoriores na tela, antes do usuario edita-los
   useEffect(() => {
      if (!id) return;

      // como useEffect nao pode ser async, cria-se uma function dentro dela
      async function getData() {
         try {
            setIsLoading(true);
            const { data } = await axios.get(`/departamentos/${id}`);

            // preenchendo os campos
            setTitulo(data.titulo);
            setTextoPrinc(data.texto_principal);
            setEmail(data.email);
            setRamal(data.ramal);
            setFuncionarios(data.funcionarios);
            setAndar(data.andar);
            setComplemento(data.complemento || ''); // Garante que não seja null
            setIsLoading(false);
         } catch (err) {
            setIsLoading(false);
            const status = get(err, 'response.status', 0);
            const errors = get(err, 'response.data.errors', []);

            if (status === 400) errors.map((error) => toast.error(error));
            history.push('/');
         }
      }
      getData();
   }, [id, history]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      let formErrors = false;

      if (titulo.length < 1 || titulo.length > 50) {
         toast.error('Titulo precisa ter entre 2 e 50 caracteres');
         formErrors = true;
      }
      if (textoPrinc.length < 3 || textoPrinc.length > 255) {
         toast.error('erro ta no front');
         formErrors = true;
      }
      if (funcionarios.length < 3 || funcionarios.length > 655) {
         toast.error('funcionarios precisa ter entre 3 e 655 caracteres');
         formErrors = true;
      }
      if (ramal.length < 3 || ramal.length > 255) {
         toast.error('Os ramais precisam ter entre 3 e 255 caracteres.');
         formErrors = true;
      }
      if (andar.length < 1 || andar.length > 255) {
         toast.error('O andar precisa ter entre 1 e 255 caracteres.');
         formErrors = true;
      }
      if (!isEmail(email)) {
         toast.error('E-mail inválido');
         formErrors = true;
      }

      // se tiver erros, nao faz o put do axios
      if (formErrors) return;

      try {
         setIsLoading(true);

         const deptoData = {
            titulo,
            texto_principal: textoPrinc,
            email,
            ramal,
            funcionarios,
            andar,
            complemento, // ENVIANDO O NOVO CAMPO
         };
         // se tiver id, edita os dados, se não, cria os dados
         if (id) {
            await axios.put(`/departamentos/${id}`, deptoData);
            toast.success('Departamento editado com sucesso!');
         } else {
            const { data } = await axios.post(`/departamentos/`, deptoData);
            toast.success('Departamento criado com sucesso!');
            history.push(`/departamentos/${data.andar}`); // Redireciona para a página de edição
         }

         setIsLoading(false);
      } catch (err) {
         setIsLoading(false);
         const status = get(err, 'response.status', 0);
         const data = get(err, 'response.data', {});
         const errors = get(data, 'errors', []);

         if (errors.length > 0) {
            errors.map((error) => toast.error(error));
         } else {
            toast.error('Erro desconhecido');
         }

         // erro 401 é de nao autorizado (usuario nao esstá mais logado)
         if (status === 401) dispatch(actions.loginFail());
      }
   };

   return (
      <Container>
         <Loading isLoading={isLoading} />

         <Title>{id ? 'Editar departamento' : 'Novo departamento'}</Title>

         {/* Campos de input */}
         <Form onSubmit={handleSubmit}>
            <input
               type="text"
               value={titulo}
               onChange={(e) => setTitulo(e.target.value)}
               placeholder="Título"
            />
            <input
               type="text"
               value={textoPrinc}
               onChange={(e) => setTextoPrinc(e.target.value)}
               placeholder="Texto principal"
            />
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email"
            />
            <input
               type="text"
               value={ramal}
               onChange={(e) => setRamal(e.target.value)}
               placeholder="Ramal"
            />
            <input
               type="text"
               value={funcionarios}
               onChange={(e) => setFuncionarios(e.target.value)}
               placeholder="Funcionários"
            />

            <select value={andar} onChange={(e) => setAndar(e.target.value)}>
               <option value="" disabled>
                  Selecione o andar
               </option>
               {andaresOptions.map((option) => (
                  <option key={option} value={option}>
                     {option}
                  </option>
               ))}
            </select>

            <input
               type="text"
               value={complemento}
               onChange={(e) => setComplemento(e.target.value)}
               placeholder="Complemento (ex: Direita, Esquerda, Fundos)"
            />

            <button type="submit">Enviar</button>
         </Form>
      </Container>
   );
}

// especificando match e history como um objeto
Departamento.propTypes = {
   match: PropTypes.shape({}).isRequired,
   history: PropTypes.shape([]).isRequired,
};
