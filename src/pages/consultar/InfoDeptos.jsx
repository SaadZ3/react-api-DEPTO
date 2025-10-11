/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { InfosContainer } from './styled';

// O componente agora é uma função pura que recebe props
export default function ViewInfos({ selectedDept }) {
   return (
      <InfosContainer>
         {selectedDept && (
            <div className="infos">
               <h3>{selectedDept.texto_principal}</h3>
               <div className="linha info-box-full" />
               <div className="info-box info-box-a">
                  <span>Ramal:</span>
                  <p>{selectedDept.ramal || 'Não disponível'}</p>
               </div>
               <div className="info-box info-box-a">
                  <span>E-mail:</span>
                  <p>{selectedDept.email || 'Não disponível'}</p>
               </div>
               <div className="info-box info-box-full">
                  <span>Funcionários:</span>
                  <p>{selectedDept.funcionarios || 'Não disponível'}</p>
               </div>
               {/* EXIBIÇÃO ATUALIZADA */}
               <div className="info-box info-box-full">
                  <span>Localização:</span>
                  <p>
                     {selectedDept.andar}
                     {selectedDept.complemento
                        ? ` - ${selectedDept.complemento}`
                        : ''}
                  </p>
               </div>
            </div>
         )}
      </InfosContainer>
   );
}

ViewInfos.propTypes = {
   selectedDept: PropTypes.shape({
      id: PropTypes.number,
      titulo: PropTypes.string,
      texto_principal: PropTypes.string,
      ramal: PropTypes.string,
      email: PropTypes.string,
      funcionarios: PropTypes.string, // Corrigido de arrayOf(func) para string
      andar: PropTypes.string,
      complemento: PropTypes.string, // Adicionado o complemento
   }),
};

ViewInfos.defaultProps = {
   selectedDept: null,
};
