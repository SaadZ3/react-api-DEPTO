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
            <div className="andares">
               <div className="s2">
                  <h1>2º Sub-solo</h1>
               </div>
               <div className="s1">
                  <h1>1º Sub-solo</h1>
               </div>
               <div className="terreo">
                  <h1>Térreo</h1>
               </div>
               <div className="primeiro">
                  <h1>1º Andar</h1>
               </div>
               <div className="segundo">
                  <h1>2º Andar</h1>
               </div>
               <div className="terceiro">
                  <h1>3º Andar</h1>
               </div>
               <div className="quarto">
                  <h1>4º Andar</h1>
               </div>
               <div className="quinto">
                  <h1>5º Andar</h1>
               </div>
               <div className="sexto">
                  <h1>6º Andar</h1>
               </div>
               <div className="setimo">
                  <h1>7º Andar</h1>
               </div>
               <div className="oitavo">
                  <h1>8º Andar</h1>
               </div>
               <div className="nono">
                  <h1>9º Andar</h1>
               </div>
               <div className="decimo">
                  <h1>10º Andar</h1>
               </div>
            </div>
         </GerenciarContainer>
      </Container>
   );
}
