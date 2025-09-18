// import { Link } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
import { useState } from 'react';
import { Container } from '../../styles/globalStyles';
import { ConsultarContainer } from './styled';

export default function Home() {
   const [valorInput, setValorInput] = useState('');

   const handleInputChange = (event) => {
      setValorInput(event.target.value);
   };

   return (
      <Container>
         <ConsultarContainer>
            <h1>Consultar</h1>
            <input
               type="text"
               autoComplete="off"
               // eslint-disable-next-line jsx-a11y/no-autofocus
               autoFocus="true"
               placeholder="Digite o nome do departamento"
               value={valorInput}
               onChange={handleInputChange}
            />
            <button type="button">Consultar</button>
         </ConsultarContainer>
      </Container>
   );
}
