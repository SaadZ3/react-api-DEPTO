import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Switch = styled.div`
   margin: 30px 0 0 0; // só margem superior
   background: ${colors.surface1};
   border-radius: ${colors.radiusXl} ${colors.radiusXl} 0 0;
   margin: 0;
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
      margin-bottom: 0; // Remove bottom margin
   }
`;

export const Btn = styled.div`
   flex: 1;
   position: relative;

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      color: ${colors.textSecondary};
      background: none;
      transition: ${colors.transition};

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
`;
