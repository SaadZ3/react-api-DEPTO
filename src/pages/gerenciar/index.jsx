import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import SwitchScreen from '../switchScreen/index';
import { GerenciarContainer } from './styled';

export default function Gerenciar() {
   const andares = ['Térreo', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            <div className="andares">
               {andares.map((andar) => (
                  <Link key={String(andar)} to={`/departamentos/${andar}`}>
                     <div>{`Andar ${andar}`}</div>
                  </Link>
               ))}
            </div>
         </GerenciarContainer>
      </Container>
   );
}
