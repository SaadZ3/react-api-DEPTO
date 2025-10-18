import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaSearch, FaSitemap } from 'react-icons/fa';

import {
   LandingContainer,
   HeroSection,
   FeaturesSection,
   Feature,
   Footer,
} from './styled';

export default function LandingPage() {
   return (
      <LandingContainer>
         <HeroSection>
            <div className="hero-content">
               <h1>Encontre qualquer departamento em segundos.</h1>
               <p>
                  O GuiaDepto é a forma mais rápida e eficiente de localizar
                  ramais, e-mails e responsáveis de todos os setores.
               </p>

               <Link to="/consultar" className="hero-button">
                  Começar a consultar
               </Link>
            </div>
            <div className="hero-image">
               {/* Você pode adicionar uma imagem ou ilustração aqui */}
            </div>
         </HeroSection>

         <FeaturesSection>
            <Feature>
               <FaSearch size={40} />
               <h2>Busca Rápida</h2>
               <p>
                  Filtre e encontre o que precisa com uma busca inteligente e
                  veloz.
               </p>
            </Feature>
            <Feature>
               <FaSitemap size={40} />
               <h2>Tudo Centralizado</h2>
               <p>
                  Todas as informações de contato em um único lugar, sempre
                  atualizadas.
               </p>
            </Feature>
            <Feature>
               <FaBuilding size={40} />
               <h2>Gerenciamento Fácil</h2>
               <p>
                  Área administrativa para manter os dados dos departamentos
                  organizados.
               </p>
            </Feature>
         </FeaturesSection>

         <Footer>
            <p>&copy; 2025 GuiaDepto. Todos os direitos reservados.</p>
         </Footer>
      </LandingContainer>
   );
}
