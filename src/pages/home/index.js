import { Link } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
import { Container } from '../../styles/globalStyles';
import { HomeContainer } from './styled';

export default function Home() {
   return (
      <Container>
         <HomeContainer>
            <h1>ClassOne</h1>
            <p>
               Bem-vindo ao ClassOne – Sua Plataforma de Gestão Educacional O
               ClassOne é um ambiente completo e intuitivo voltado para o
               gerenciamento acadêmico de instituições de ensino. Desenvolvido
               para facilitar a rotina de alunos e professores, nosso sistema
               centraliza as principais funcionalidades do dia a dia escolar em
               um único lugar.
            </p>
            <li>
               <strong>Para alunos:</strong> acompanhe suas notas, frequência,
               participe de suas turmas e entre em contato direto com seus
               professores através do chat integrado.
            </li>
            <li>
               <strong>Para professores:</strong> crie e gerencie suas turmas,
               registre notas e presenças, responda às dúvidas dos alunos e
               acompanhe o desempenho acadêmico com facilidade.
            </li>
            <h3> Entre ou Crie sua Conta abaixo!</h3>
            <div>
               <Link to="/login/">
                  <button type="submit">Entrar</button>
               </Link>
               <Link to="/register/">
                  <button type="submit">Criar Conta</button>
               </Link>
            </div>
         </HomeContainer>
      </Container>
   );
}
