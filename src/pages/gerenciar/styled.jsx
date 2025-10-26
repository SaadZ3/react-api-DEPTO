import styled from 'styled-components';
import * as colors from '../../config/colors';

export const GerenciarContainer = styled.div`
   /* margin: 0 0 32px 0; // só margem inferior */
   padding: 40px;
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
   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
   }

   .headerGeren h1 {
      font-size: 1.8rem;
      color: ${colors.textPrimary};
      margin: 0;
      font-weight: 700;
      background: linear-gradient(
         135deg,
         ${colors.primary},
         ${colors.primaryHover}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
   }

   button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      border: none;
      border-radius: ${colors.radiusLg};
      background: linear-gradient(
         135deg,
         ${colors.primary},
         ${colors.primaryHover}
      );
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: ${colors.transition};
      font-size: 15px;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
         content: '';
         position: absolute;
         top: 50%;
         left: 50%;
         width: 0;
         height: 0;
         background: rgba(255, 255, 255, 0.3);
         border-radius: 50%;
         transform: translate(-50%, -50%);
         transition:
            width 0.6s,
            height 0.6s;
      }

      &:hover {
         transform: translateY(-3px);
         box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
         &::before {
            width: 300px;
            height: 300px;
         }
      }
      &:active {
         transform: translateY(-1px);
      }
      svg {
         position: relative;
         z-index: 1;
      }
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
