import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { get } from 'lodash';
// import { FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/globalStyles';
import { DeptosContainer2 } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/loading';

export default function ListarDeptos() {
   const { andar } = useParams(); // <-- captura o parâmetro da URL
   const [departamentos, setDepartamentos] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   // useEffect é um Hook que permite realizar efeitos colaterais em componentes funcionais
   useEffect(() => {
      async function getData() {
         setIsLoading(true);
         try {
            // Faz a requisição para a API com o filtro de andar
            const response = await axios.get(`/departamentos?andar=${andar}`);
            setDepartamentos(response.data);
         } catch (error) {
            toast.error('Erro ao carregar departamentos');
         }
         setIsLoading(false);
      }
      getData();
   }, [andar]); // <-- roda sempre que o andar mudar

   // clicar no X
   // const handleDeleteAsk = (e) => {
   //    e.preventDefault();
   //    const exclamation = e.currentTarget.nextSibling; // pega o proximo irmao do FaWinClose, no caso o <FaExclamation>
   //    exclamation.setAttribute('display', 'block');
   //    e.currentTarget.remove();
   // };
   // clciar no !
   // const handleDelete = async (e, id, index) => {
   //    e.persist();

   //    try {
   //       setIsLoading(true);
   //       await axios.delete(`/alunos/${id}`);
   //       const novosAlunos = [...alunos]; // copia os alunos
   //       novosAlunos.splice(index, 1); // separa dos que se quer excluir
   //       setAlunos(novosAlunos);
   //       setIsLoading(false);
   //    } catch (err) {
   //       const status = get(err, 'response.status', 0);

   //       if (status === 401) {
   //          toast.error('Você precisa fazer login');
   //       } else {
   //          toast.error('Ocorreu um erro ao excluir aluno');
   //       }

   //       setIsLoading(false);
   //    }
   // };

   return (
      <Container>
         <Loading isLoading={isLoading} />
         <div>
            <h1>GERENCIAR</h1>
            <Link to="/aluno/">
               <button type="button">Novo Departamento</button>
            </Link>
         </div>
         <h1>Departamentos do Andar: {andar}</h1>

         <DeptosContainer2>
            {departamentos.map((depto) => (
               <div key={String(depto.id)}>
                  <span>{depto.titulo}</span>
                  <span>{depto.email}</span>

                  <Link to={`/departamento/${depto.id}/edit`}>
                     <FaEdit size={16} />
                  </Link>

                  {/* <Link
                     onClick={handleDeleteAsk}
                     to={`/aluno/${aluno.id}/delete`}
                  >
                     <FaWindowClose size={16} />
                  </Link> */}

                  {/* <FaExclamation
                     size={16}
                     display="none"
                     cursor="pointer"
                     onClick={(e) => handleDelete(e, aluno.id, index)}
                  /> */}
               </div>
            ))}
         </DeptosContainer2>
      </Container>
   );
}
