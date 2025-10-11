import React from 'react';
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
            </div>
         </GerenciarContainer>
      </Container>
   );
}
