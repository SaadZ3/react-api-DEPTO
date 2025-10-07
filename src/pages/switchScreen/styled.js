import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Switch = styled.div`
   max-width: 1200px;
   /* margin: 40px auto; */
   background: ${colors.surface1};
   border-radius: ${colors.radiusXl};
   border: 1px solid ${colors.border};
   box-shadow: ${colors.shadowXl};
   backdrop-filter: blur(10px);
   animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);

   .navegation {
      display: flex;
      background: ${colors.surface2};
      border-bottom: 1px solid ${colors.border};
      position: relative;
      overflow: hidden;
      border-radius: 20px 20px 0 0;
   }
   .navegation::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
         90deg,
         transparent,
         rgba(59, 130, 246, 0.02),
         transparent
      );
      animation: shimmer 3s infinite;
   }

   @keyframes shimmer {
      0% {
         transform: translateX(-100%);
      }
      100% {
         transform: translateX(100%);
      }
   }
   .navegation button {
      flex: 1;
      padding: 20px;
      font-size: 14px;
      font-weight: 500;
      color: ${colors.textSecondary};
      background: none;
      border: none;
      cursor: pointer;
      transition: ${colors.transition};
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
   }
   .navegation button::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: ${colors.primary};
      transform: translateX(-50%);
      transition: ${colors.transition};
   }
   .navegation button:hover {
      color: ${colors.textPrimary};
      background: ${colors.surface3};
   }
   /* .navegation button.active {
      color: ${colors.primary};
      background: ${colors.primaryLight};
   }

   .navegation button.active::before {
      width: 60%;
   } */
   .navegation {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
   }

   button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: #ddd;
      transition: all 0.3s;

      &.active {
         background: #0066cc;
         color: white;
      }

      &:hover {
         opacity: 0.8;
      }
   }
`;
