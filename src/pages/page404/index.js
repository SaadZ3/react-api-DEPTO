import React from 'react';

import { Container } from '../../styles/globalStyles';
import astronauta from '../../styles/images/astronauta.png';
import { Page403 } from './styled';

export default function Page404() {
   return (
      <Container>
         <Page403>
            <img src={astronauta} alt="Página não encontrada" />
            <h1>Página não encontrada :(</h1>
            <p>
               {' '}
               A página que você tentou acessar está indisponivel ou não existe
            </p>
         </Page403>
      </Container>
   );
}
