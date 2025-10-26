import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { get } from 'lodash';
import {
   FaEdit,
   FaExclamation,
   FaWindowClose,
   FaBuilding,
   FaEnvelope,
   FaPlus,
   FaBoxOpen,
} from 'react-icons/fa';
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
   const handleDeleteAsk = (e) => {
      e.preventDefault();
      const exclamation = e.currentTarget.nextSibling; // pega o proximo irmao do FaWinClose, no caso o <FaExclamation>
      exclamation.setAttribute('display', 'block');
      e.currentTarget.remove();
   };
   // clciar no !
   const handleDelete = async (e, id, index) => {
      e.persist();

      try {
         setIsLoading(true);
         await axios.delete(`/departamentos/${id}`);
         const novosDeptos = [...departamentos]; // copia os departamentos
         novosDeptos.splice(index, 1); // separa dos que se quer excluir
         setDepartamentos(novosDeptos);
         toast.success('Departamento excluído com sucesso!');
         setIsLoading(false);
      } catch (err) {
         const status = get(err, 'response.status', 0);

         if (status === 401) {
            toast.error('Você precisa fazer login');
         } else {
            toast.error('Ocorreu um erro ao excluir departamento');
         }

         setIsLoading(false);
      }
   };

   return (
      <Container>
         <Loading isLoading={isLoading} />
         <DeptosContainer2>
            <div className="header-wrapper">
               <h1>Gerenciar Departamentos</h1>
               <Link to="/departamento/">
                  <button type="button">
                     <FaPlus /> Novo Departamento
                  </button>
               </Link>
            </div>
            <div className="floor-title-section">
               <h2>
                  <FaBuilding className="floor-icon" />
                  Departamentos do {andar}
               </h2>
               <p className="floor-subtitle">
                  {departamentos.length} departamento
                  {departamentos.length !== 1 ? 's' : ''} cadastrado
                  {departamentos.length !== 1 ? 's' : ''}
               </p>
            </div>

            {/* Lista de departamentos */}
            {departamentos.length > 0 ? (
               <div className="departments-list">
                  {departamentos.map((depto, index) => (
                     <div key={String(depto.id)} className="department-card">
                        <div className="dept-info">
                           <h3 className="dept-title">
                              <FaBuilding className="dept-icon" />
                              {depto.titulo}
                           </h3>
                           <p className="dept-email">
                              <FaEnvelope className="email-icon" />
                              {depto.email}
                           </p>
                        </div>

                        <div className="dept-actions">
                           <Link to={`/departamento/${depto.id}/edit`}>
                              <div className="action-btn edit-btn">
                                 <FaEdit />
                              </div>
                           </Link>

                           <Link
                              onClick={handleDeleteAsk}
                              to={`/departamento/${depto.id}/delete`}
                           >
                              <div className="action-btn delete-btn">
                                 <FaWindowClose />
                              </div>
                           </Link>

                           <FaExclamation
                              className="action-btn confirm-delete-btn"
                              display="none"
                              cursor="pointer"
                              onClick={(e) => handleDelete(e, depto.id, index)}
                           />
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               !isLoading && (
                  <div className="empty-state">
                     <div className="empty-icon">
                        <FaBoxOpen size={48} />
                     </div>
                     <h3>Nenhum departamento cadastrado</h3>
                     <p>
                        Este andar ainda não possui departamentos cadastrados.
                        Clique no botão Novo Departamento para adicionar o
                        primeiro.
                     </p>
                  </div>
               )
            )}
         </DeptosContainer2>
      </Container>
   );
}
