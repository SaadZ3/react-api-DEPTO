import styled from 'styled-components';
import * as colors from '../../config/colors';

export const GerenciarContainer = styled.div`
   margin: 0 0 32px 0; // só margem inferior
   padding: 32px;
   animation: slideIn 0.6s ease-out;
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
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
   }
   button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border: none;
      border-radius: ${colors.radius};
      background: ${colors.primary};
      color: white;
      font-weight: 500;
      cursor: pointer;
      transition: ${colors.transition};
      font-size: 14px;
      box-shadow: ${colors.shadowSm};
   }
   button:hover {
      background: ${colors.primaryHover};
      transform: translateY(-2px);
      box-shadow: ${colors.shadow};
   }
   .andares {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
   }
   .andares div {
      background: ${colors.surface2};
      border: 1px solid ${colors.border};
      border-radius: ${colors.radius};
      padding: 20px;
      cursor: pointer;
      transition: ${colors.transition};
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80px;
   }
   .andares div::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
         90deg,
         transparent,
         ${colors.primaryLight},
         transparent
      );
      transition: ${colors.transition};
   }

   .andares div:hover {
      border-color: ${colors.primary};
      transform: translateY(-2px) scale(1.02);
      box-shadow: ${colors.shadowLg};
      background: ${colors.surface3};
   }
   .andares div:hover::before {
      left: 100%;
   }
   .andares div:active {
      transform: translateY(-4px) scale(1);
   }
   .NomeAndar {
      font-size: 16px;
      margin: 0;
      font-weight: 700;
      color: ${colors.textPrimary};
      text-align: center;
      position: relative;
      z-index: 1;
   }
`;
