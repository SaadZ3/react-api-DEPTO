import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Switch = styled.div`
   margin: 30px auto;
   margin-bottom: 0px;
   background: ${colors.surface1};
   border-radius: ${colors.radiusXl};
   /* border: 1px solid ${colors.border}; */
   /* box-shadow: ${colors.shadowXl}; */
   backdrop-filter: blur(10px);
   animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);

   .navegation {
      display: flex;
      justify-content: center;
      background: ${colors.surface2};
      border-bottom: 1px solid ${colors.border};
      position: relative;
      overflow: hidden;
      border-radius: 20px 20px 0 0;
      gap: 20px;
      margin-bottom: 20px;

      &::before {
         content: '';
         position: absolute;
         inset: 0;
         background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.02),
            transparent
         );
         animation: shimmer 3s infinite;
      }

      button {
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

         &::before {
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

         &:hover {
            color: ${colors.textPrimary};
            background: ${colors.surface3};
         }

         &.active {
            background: ${colors.primary};
            color: white;
         }
      }
   }

   @keyframes shimmer {
      from {
         transform: translateX(-100%);
      }
      to {
         transform: translateX(100%);
      }
   }
`;
