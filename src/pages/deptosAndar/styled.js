import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const DeptosContainer2 = styled.div`
   padding: 40px;
   animation: fadeInUp 0.6s ease-out;
   min-height: 60vh;

   @keyframes fadeInUp {
      from {
         opacity: 0;
         transform: translateY(20px);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }

   /* ===== HEADER SECTION ===== */
   .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 24px;
      border-bottom: 2px solid ${colors.border};
      flex-wrap: wrap;
      gap: 20px;
   }

   .header-wrapper h1 {
      font-size: 2rem;
      color: ${colors.textPrimary};
      margin: 0;
      font-weight: 700;
      background: ${colors.gradientPrimary};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
   }

   .header-wrapper button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border: none;
      border-radius: ${colors.radiusLg};
      background: ${colors.gradientPrimary};
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: ${colors.transition};
      font-size: 14px;
      box-shadow: ${colors.shadowPrimary};
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
         box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);

         &::before {
            width: 300px;
            height: 300px;
         }
      }

      &:active {
         transform: translateY(-1px);
      }
   }

   /* ===== FLOOR TITLE ===== */
   .floor-title-section {
      margin-bottom: 32px;
      padding: 24px;
      /* background: ${colors.surface2}; */
      border-radius: ${colors.radiusLg};
      /* border: 1px solid ${colors.border}; */
      position: relative;
      overflow: hidden;

      &::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         height: 3px;
         /* background: ${colors.gradientPrimary}; */
      }
   }

   .floor-title-section h2 {
      font-size: 1.5rem;
      color: ${colors.textPrimary};
      margin: 0;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 12px;

      .floor-icon {
         color: ${colors.primary};
         font-size: 1.75rem;
      }
   }

   .floor-subtitle {
      color: ${colors.textSecondary};
      margin: 8px 0 0 0;
      font-size: 0.95rem;
   }

   /* ===== DEPARTMENTS LIST ===== */
   .departments-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
   }

   .department-card {
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      gap: 20px;
      padding: 20px 24px;
      background: ${colors.surface1};
      border: 2px solid ${colors.border};
      border-radius: ${colors.radiusLg};
      transition: ${colors.transition};
      position: relative;
      overflow: hidden;

      &::before {
         content: '';
         position: absolute;
         left: 0;
         top: 0;
         bottom: 0;
         width: 4px;
         background: ${colors.gradientPrimary};
         transform: scaleY(0);
         transition: ${colors.transition};
      }

      &:hover {
         background: ${colors.surface2};
         border-color: ${colors.primary};
         transform: translateX(4px);
         box-shadow: ${colors.shadowLg};

         &::before {
            transform: scaleY(1);
         }
      }
   }

   .dept-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0; /* Para permitir text-overflow */
   }

   .dept-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${colors.textPrimary};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .dept-icon {
         color: ${colors.primary};
         font-size: 1.2rem;
         flex-shrink: 0;
      }
   }

   .dept-email {
      font-size: 0.9rem;
      color: ${colors.textSecondary};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .email-icon {
         color: ${colors.textMuted};
         flex-shrink: 0;
      }
   }

   .dept-actions {
      display: flex;
      gap: 12px;
      align-items: center;
   }

   .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: ${colors.radius};
      transition: ${colors.transition};
      cursor: pointer;
      border: 2px solid transparent;
      background: ${colors.surface3};

      svg {
         font-size: 16px;
      }
   }

   .edit-btn {
      color: ${colors.primary};

      &:hover {
         background: ${colors.primaryLight};
         border-color: ${colors.primary};
         transform: scale(1.1);
      }
   }

   .delete-btn {
      color: ${colors.danger};

      &:hover {
         background: ${colors.dangerLight};
         border-color: ${colors.danger};
         transform: scale(1.1);
      }
   }

   .confirm-delete-btn {
      color: ${colors.danger};
      animation: pulse 1s ease-in-out infinite;

      &:hover {
         background: ${colors.danger};
         color: white;
         transform: scale(1.2);
      }
   }

   @keyframes pulse {
      0%,
      100% {
         box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
      }
      50% {
         box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
      }
   }

   /* ===== EMPTY STATE ===== */
   .empty-state {
      text-align: center;
      padding: 80px 20px;
      animation: fadeIn 0.6s ease-out;
   }

   @keyframes fadeIn {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   .empty-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${colors.surface2};
      border-radius: 50%;
      color: ${colors.textMuted};
      border: 2px dashed ${colors.border};
   }

   .empty-state h3 {
      font-size: 1.5rem;
      color: ${colors.textPrimary};
      margin-bottom: 12px;
      font-weight: 600;
   }

   .empty-state p {
      color: ${colors.textSecondary};
      font-size: 1rem;
      max-width: 400px;
      margin: 0 auto;
      line-height: 1.6;
   }

   /* ===== LOADING SKELETON ===== */
   .skeleton-card {
      padding: 20px 24px;
      background: ${colors.surface1};
      border: 2px solid ${colors.border};
      border-radius: ${colors.radiusLg};
      animation: pulse 1.5s ease-in-out infinite;
   }

   .skeleton-line {
      height: 20px;
      background: ${colors.surface3};
      border-radius: ${colors.radiusSm};
      margin-bottom: 12px;

      &.short {
         width: 60%;
      }

      &.long {
         width: 80%;
      }
   }

   /* ===== STATS BAR ===== */
   .stats-bar {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
   }

   .stat-card {
      flex: 1;
      min-width: 200px;
      padding: 20px;
      background: ${colors.surface2};
      border: 1px solid ${colors.border};
      border-radius: ${colors.radiusLg};
      display: flex;
      align-items: center;
      gap: 16px;
      transition: ${colors.transition};

      &:hover {
         border-color: ${colors.primary};
         transform: translateY(-2px);
         box-shadow: ${colors.shadow};
      }
   }

   .stat-icon {
      width: 48px;
      height: 48px;
      background: ${colors.primaryLight};
      color: ${colors.primary};
      border-radius: ${colors.radius};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
   }

   .stat-info {
      flex: 1;
   }

   .stat-label {
      font-size: 0.85rem;
      color: ${colors.textSecondary};
      margin: 0 0 4px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
   }

   .stat-value {
      font-size: 1.75rem;
      font-weight: 700;
      color: ${colors.textPrimary};
      margin: 0;
   }

   /* ===== RESPONSIVE ===== */
   @media (max-width: 968px) {
      padding: 24px 20px;

      .header-wrapper {
         flex-direction: column;
         align-items: flex-start;
      }

      .header-wrapper h1 {
         font-size: 1.5rem;
      }

      .header-wrapper button {
         width: 100%;
         justify-content: center;
      }

      .department-card {
         grid-template-columns: 1fr;
         gap: 16px;
      }

      .dept-actions {
         justify-content: flex-end;
      }

      .stats-bar {
         flex-direction: column;
      }

      .stat-card {
         min-width: 100%;
      }
   }

   @media (max-width: 640px) {
      padding: 20px 16px;

      .floor-title-section {
         padding: 20px;
      }

      .floor-title-section h2 {
         font-size: 1.25rem;
      }

      .department-card {
         padding: 16px;
      }

      .dept-title {
         font-size: 1rem;
      }

      .dept-email {
         font-size: 0.85rem;
      }

      .action-btn {
         width: 36px;
         height: 36px;
      }
   }
`;

export const ProfilePicure = styled.div`
   img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid ${colors.border};
      transition: ${colors.transition};

      &:hover {
         border-color: ${colors.primary};
         transform: scale(1.1);
      }
   }
`;

export const NovoAluno = styled(Link)`
   display: inline-flex;
   align-items: center;
   gap: 8px;
   padding: 12px 20px;
   background: ${colors.gradientPrimary};
   color: white;
   border-radius: ${colors.radiusLg};
   font-weight: 600;
   transition: ${colors.transition};
   box-shadow: ${colors.shadowPrimary};
   margin: 20px 0;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
   }
`;
