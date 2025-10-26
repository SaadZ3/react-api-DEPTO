import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const LandingContainer = styled.div`
   width: 100%;
   background: ${colors.primaryDarkColor};
   color: #fff;
   overflow-x: hidden;
`;

export const HeroSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   min-height: 80vh;
   padding: 60px 5%;
   animation: ${fadeIn} 1s ease-out;
   position: relative;
   background:
      radial-gradient(
         ellipse at top,
         rgba(17, 124, 224, 0.15),
         transparent 70%
      ),
      ${colors.primaryDarkColor};

   /* Efeito de grid no fundo */
   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
         linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
         linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.5;
      pointer-events: none;
   }

   .hero-content {
      position: relative;
      z-index: 1;
      max-width: 900px;
   }

   .hero-content h1 {
      font-size: clamp(2.5rem, 6vw, 4rem);
      max-width: 800px;
      margin: 0 auto 24px;
      line-height: 1.2;
      font-weight: 800;
      background: linear-gradient(
         135deg,
         #ffffff,
         ${colors.primaryColor},
         #2196f3
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% auto;
      animation: ${shimmer} 3s linear infinite;
      text-shadow: 0 0 40px rgba(17, 124, 224, 0.3);
   }

   .hero-content p {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: rgba(255, 255, 255, 0.8);
      max-width: 600px;
      margin: 0 auto 40px;
      line-height: 1.7;
      font-weight: 300;
   }

   .hero-button {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, ${colors.primaryColor}, #2196f3);
      color: #fff;
      padding: 18px 40px;
      border-radius: ${colors.radiusLg};
      font-size: 1.1rem;
      font-weight: 700;
      transition: ${colors.transition};
      box-shadow: 0 8px 32px rgba(17, 124, 224, 0.4);
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
            rgba(255, 255, 255, 0.3),
            transparent
         );
         transition: ${colors.transition};
      }

      &:hover {
         transform: translateY(-4px);
         box-shadow: 0 12px 48px rgba(17, 124, 224, 0.5);

         &::before {
            left: 100%;
         }
      }

      &:active {
         transform: translateY(-2px);
      }
   }

   /* Círculos decorativos flutuantes */
   &::after {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(
         circle,
         rgba(17, 124, 224, 0.2),
         transparent 70%
      );
      top: 10%;
      right: -200px;
      animation: ${float} 6s ease-in-out infinite;
      pointer-events: none;
   }

   @media (max-width: 768px) {
      min-height: 70vh;
      padding: 40px 5%;
   }
`;

export const FeaturesSection = styled.section`
   display: flex;
   justify-content: center;
   gap: 32px;
   padding: 100px 5%;
   background: linear-gradient(
      180deg,
      ${colors.primaryDarkColor} 0%,
      #1a1a1a 100%
   );
   text-align: center;
   position: relative;

   /* Linha decorativa superior */
   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(
         90deg,
         transparent,
         rgba(17, 124, 224, 0.5),
         transparent
      );
   }

   @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;
      padding: 60px 5%;
      gap: 40px;
   }
`;

export const Feature = styled.div`
   max-width: 320px;
   padding: 40px 32px;
   background: rgba(255, 255, 255, 0.03);
   border: 1px solid rgba(255, 255, 255, 0.08);
   border-radius: ${colors.radiusXl};
   animation: ${fadeIn} 1s ease-out forwards;
   opacity: 0;
   transition: ${colors.transition};
   position: relative;
   overflow: hidden;
   backdrop-filter: blur(10px);

   &:nth-child(1) {
      animation-delay: 0.2s;
   }
   &:nth-child(2) {
      animation-delay: 0.4s;
   }
   &:nth-child(3) {
      animation-delay: 0.6s;
   }

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, ${colors.primaryColor}, #2196f3);
      transform: scaleX(0);
      transform-origin: left;
      transition: ${colors.transition};
   }

   &:hover {
      transform: translateY(-8px);
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(17, 124, 224, 0.4);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);

      &::before {
         transform: scaleX(1);
      }
   }

   svg {
      color: ${colors.primaryColor};
      margin-bottom: 24px;
      filter: drop-shadow(0 0 12px rgba(17, 124, 224, 0.5));
      transition: ${colors.transition};
   }

   &:hover svg {
      transform: scale(1.1) rotate(5deg);
   }

   h2 {
      font-size: 1.5rem;
      margin-bottom: 16px;
      font-weight: 700;
      color: #ffffff;
   }

   p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
      font-size: 1rem;
   }

   @media (max-width: 968px) {
      max-width: 400px;
      width: 100%;
   }
`;

export const Footer = styled.footer`
   text-align: center;
   padding: 40px 5%;
   border-top: 1px solid rgba(255, 255, 255, 0.08);
   color: rgba(255, 255, 255, 0.5);
   font-size: 0.95rem;
   background: #0a0a0a;

   p {
      margin: 0;
   }

   a {
      color: ${colors.primaryColor};
      text-decoration: none;
      transition: ${colors.transitionFast};

      &:hover {
         color: #2196f3;
         text-decoration: underline;
      }
   }
`;
