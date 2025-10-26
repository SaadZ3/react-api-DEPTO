import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import SwitchScreen from '../../components/switchScreen/index';
import { GerenciarContainer } from './styled';

export default function Gerenciar() {
   const andares = [
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
   return (
      <Container>
         <SwitchScreen />
         <GerenciarContainer>
            <div className="headerGeren">
               <h1>Gerenciar Departamentos</h1>
               <Link to="/departamento/">
                  <button type="button">Novo Departamento</button>
               </Link>
            </div>
            <div className="andares">
               {andares.map((andar) => (
                  <Link key={andar} to={`/departamentos/${andar}`}>
                     <div className="NomeAndar">{andar}</div>
                  </Link>
               ))}
            </div>
         </GerenciarContainer>
      </Container>
   );
}
