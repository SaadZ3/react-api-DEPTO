import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
   background: ${colors.secondaryDarkColor};
   padding: 20px 5%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid rgba(255, 255, 255, 0.08);
   position: sticky;
   top: 0;
   z-index: 100;
   backdrop-filter: blur(10px);
   background: rgba(20, 20, 24, 0.95);
   box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
   transition: ${colors.transition};

   .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.3rem;
      color: ${colors.primaryColor};
      transition: ${colors.transition};
      cursor: pointer;
      position: relative;

      svg {
         transition: ${colors.transition};
      }

      &:hover {
         transform: translateY(-2px);

         svg {
            transform: scale(1.1) rotate(5deg);
         }
      }

      h1 {
         font-weight: 700;
         letter-spacing: -0.5px;
         background: linear-gradient(135deg, ${colors.primaryColor}, #2196f3);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
      }
   }

   > div {
      display: flex;
      align-items: center;
      gap: 16px;
   }

   .nav-link {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: ${colors.transition};
      padding: 8px 16px;
      border-radius: ${colors.radiusSm};
      position: relative;

      &::before {
         content: '';
         position: absolute;
         bottom: 0;
         left: 50%;
         transform: translateX(-50%) scaleX(0);
         width: 80%;
         height: 2px;
         background: ${colors.primaryColor};
         transition: ${colors.transition};
      }

      &:hover {
         color: ${colors.primaryColor};
         background: rgba(17, 124, 224, 0.1);

         &::before {
            transform: translateX(-50%) scaleX(1);
         }
      }
   }

   .nav-link-login,
   .nav-link-register {
      color: #fff;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: ${colors.transition};
      padding: 10px 20px;
      border-radius: ${colors.radiusSm};
      position: relative;
      overflow: hidden;

      &::before {
         content: '';
         position: absolute;
         top: 0;
         left: -100%;
         width: 100%;
         height: 100%;
         background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
         );
         transition: ${colors.transition};
      }

      &:hover::before {
         left: 100%;
      }
   }

   .nav-link-login {
      background: linear-gradient(135deg, ${colors.primaryColor}, #2196f3);
      box-shadow: 0 4px 12px rgba(17, 124, 224, 0.3);

      &:hover {
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(17, 124, 224, 0.4);
      }

      &:active {
         transform: translateY(0);
      }
   }

   .nav-link-register {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);

      &:hover {
         background: rgba(255, 255, 255, 0.15);
         border-color: ${colors.primaryColor};
         color: ${colors.primaryColor};
         transform: translateY(-2px);
      }
   }

   svg[color='#66ff33'] {
      filter: drop-shadow(0 0 8px #66ff33);
   }

   @keyframes pulse {
      0%,
      100% {
         opacity: 1;
         transform: scale(1);
      }
      50% {
         opacity: 0.7;
         transform: scale(1.1);
      }
   }

   @media (max-width: 768px) {
      padding: 16px 4%;
      flex-wrap: wrap;
      gap: 12px;

      .logo {
         font-size: 1.1rem;

         h1 {
            font-size: 1.1rem;
         }
      }

      > div {
         gap: 10px;
         flex-wrap: wrap;
      }

      .nav-link,
      .nav-link-login,
      .nav-link-register {
         padding: 8px 14px;
         font-size: 14px;
      }
   }
`;
