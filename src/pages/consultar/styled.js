import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ConsultarContainer = styled.div`
   /* margin: 0 0 32px 0; // só margem inferior */
   padding: 32px;
   animation: slideIn 0.6s ease-out;
   background: ${colors.surface1};
   border: 1px solid ${colors.border};
   border-top: none;
   border-radius: 0 0 ${colors.radiusXl} ${colors.radiusXl};
   p,
   h3,
   li {
      margin: 20px 0px;
   }
   .ConsultarDiv {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 32px;
   }
   .iptConsulta {
      width: 100%;
      height: 56px;
      padding: 0 120px 0 20px;
      font-size: 16px;
      color: ${colors.textPrimary};
      background: ${colors.surface2};
      border: 1px solid ${colors.border};
      border-radius: ${colors.radius};
      transition: ${colors.transition};
      font-family: inherit;
   }
   .iptConsulta:focus {
      border-color: ${colors.primary};
      box-shadow: 0 0 0 4px ${colors.primaryLight};
      background: ${colors.surface3};
   }
   .iptConsulta::placeholder {
      color: ${colors.textMuted};
   }
   .ConsultarDiv button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      height: 40px;
      padding: 0 24px;
      border: none;
      border-radius: ${colors.radiusSm};
      background: ${colors.primary};
      color: white;
      font-weight: 500;
      cursor: pointer;
      transition: ${colors.transition};
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
   }
   .clearInput {
      position: absolute;
      right: 125px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 20px;
      color: ${colors.textMuted};
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: ${colors.transitionFast};
   }
   .clearInput:hover {
      background: rgba(255, 255, 255, 0.3);
      color: ${colors.textSecondary};
      transform: translateY(-50%) scale(1.1) rotate(90deg);
   }

   ul {
      list-style: none;
      margin: 8px 0 0 0;
      padding: 8px;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      background: ${colors.surface2};
      z-index: 1000;
      border-radius: ${colors.radius};
      border: 1px solid ${colors.border};
      box-shadow: ${colors.shadowLg};
      max-height: 320px; /* Altura máxima da lista */
      overflow-y: auto; /* Adiciona scroll vertical quando necessário */
      backdrop-filter: blur(10px);
      animation: fadeInUp 0.2s ease-out;

      /* Estilização da scrollbar para a lista */
      &::-webkit-scrollbar {
         width: 8px;
      }

      &::-webkit-scrollbar-track {
         background: ${colors.surface3};
         border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
         background: ${colors.primary};
         border-radius: 4px;

         &:hover {
            background: ${colors.primaryHover};
         }
      }
   }

   li {
      padding: 12px 16px;
      cursor: pointer;
      border-radius: ${colors.radiusSm};
      transition: ${colors.transitionFast};
      margin: 4px 0;
   }

   li.highlighted,
   li:hover {
      background-color: ${colors.primary};
      color: white;
      font-weight: 500;
   }
`;

export const InfosContainer = styled.div`
   align-items: center;
   justify-content: center;
   margin-top: 32px;
   margin: 0px;
   padding: 0px;
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
