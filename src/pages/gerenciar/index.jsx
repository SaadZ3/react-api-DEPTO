import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import SwitchScreen from '../switchScreen/index';
import { GerenciarContainer } from './styled';

export default function Gerenciar() {
   return (
      <Container>
         <SwitchScreen />
         <GerenciarContainer>
            <div>
               <h1>GERENCIAR</h1>
               <Link to="/aluno/">
                  <button type="button">Novo Departamento</button>
               </Link>
            </div>
         </GerenciarContainer>
      </Container>
   );
}
