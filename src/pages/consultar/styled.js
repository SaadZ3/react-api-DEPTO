import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ConsultarContainer = styled.div`
   margin: 0 0 32px 0; // só margem inferior
   padding: 30px;
   background: #f8feffff;
   border: 1px solid ${colors.border};
   border-top: none;
   border-radius: 0 0 ${colors.radiusXl} ${colors.radiusXl};
   p,
   h3,
   li {
      margin: 20px 0px;
   }
   div {
      display: flex;
      justify-content: center;
      align-items: center;
   }
   button {
      margin: 10px 10px;
   }
   position: relative;
   width: 100%; // para se ajustar ao container pai

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid #ccc;
      position: absolute;
      width: 100%;
      background-color: white;
      z-index: 10;
      margin-top: 5px; // pequeno espaço
   }

   li {
      padding: 10px;
      cursor: pointer;
   }

   li:hover {
      background-color: #f0f0f0;
   }

   li.highlighted {
      background-color: #e0e0e0;
      font-weight: bold;
   }
`;

export const InfosContainer = styled.div`
   .infos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      animation: fadeInRight 0.4s ease-out;
   }

   .infos h3 {
      grid-column: 1 / -1;
      font-size: 30px;
      margin-bottom: -5px;
   }

   .infos .info-box-full {
      grid-column: 1 / -1; /* Ocupa da primeira à última coluna */
   }
   .info-box-a {
      align-items: flex-start !important; /* Força o alinhamento no topo */
      height: 100%; /* Garante que a caixa ocupe toda a altura disponível */
   }

   .info-box {
      background: ${colors.background};
      padding: 20px 20px;
      border-radius: ${colors.radius};
      border: 1px solid ${colors.border};
      transition: ${colors.transition};
      position: relative;
      overflow: hidden;
      /*Garante um alinhamento interno consistente */
      display: flex;
      flex-direction: column;
      min-height: 120px; /* Garante que cards com pouco texto não fiquem muito pequenos */
   }

   .info-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
         90deg,
         ${colors.primary},
         ${colors.primaryHover}
      );
      transform: scaleX(0);
      transition: ${colors.transition};
   }

   .info-box:hover {
      border-color: ${colors.primaryColor};
      /* transform: translateY(-4px); */
      box-shadow: ${colors.shadowLg};
   }

   .info-box:hover::before {
      transform: scaleX(1);
   }

   .info-box span,
   .info-box-gerenc span {
      font-weight: 600; /* Mais destaque para o título */
      color: ${colors.textPrimary};
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px; /* Mais espaço entre título e conteúdo */
   }
   /* ... */
   .info-box p,
   .info-box-gerenc p {
      margin: 0;
      font-size: 16px; /* Fonte do conteúdo um pouco maior para facilitar a leitura */
      color: ${colors.textSecondary};
      word-break: break-word;
      line-height: 1.7; /* Mais espaçamento entre linhas para textos longos */
      flex-grow: 1; /* Faz o conteúdo ocupar o espaço disponível */
   }

   .info-box i,
   .info-box-gerenc i {
      color: ${colors.primary};
      font-size: 16px;
      width: 20px;
      text-align: center;
   }
   .linha {
      background: ${colors.border};
      height: 1px;
   }
`;
