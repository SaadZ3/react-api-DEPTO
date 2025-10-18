import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandingContainer = styled.div`
   width: 100%;
   background: ${colors.primaryDarkColor};
   color: #fff;
`;

export const HeroSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   min-height: 70vh;
   padding: 40px 20px;
   animation: ${fadeIn} 1s ease-out;

   .hero-content h1 {
      font-size: 3.5rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.2;
   }

   .hero-content p {
      font-size: 1.2rem;
      color: #ccc;
      max-width: 600px;
      margin: 20px auto 30px;
   }

   .hero-button {
      background: ${colors.primaryColor};
      color: #fff;
      padding: 15px 30px;
      border-radius: 5px;
      font-size: 1.1rem;
      font-weight: bold;
      transition:
         transform 0.3s,
         filter 0.3s;

      &:hover {
         transform: scale(1.05);
         filter: brightness(1.1);
      }
   }
`;

export const FeaturesSection = styled.section`
   display: flex;
   justify-content: center;
   gap: 40px;
   padding: 80px 5%;
   background: #1a1a1a; // Um tom um pouco diferente para contraste
   text-align: center;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

export const Feature = styled.div`
   max-width: 300px;
   animation: ${fadeIn} 1s ease-out forwards;
   opacity: 0;

   &:nth-child(1) {
      animation-delay: 0.2s;
   }
   &:nth-child(2) {
      animation-delay: 0.4s;
   }
   &:nth-child(3) {
      animation-delay: 0.6s;
   }

   svg {
      color: ${colors.primaryColor};
      margin-bottom: 20px;
   }

   h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
   }

   p {
      color: #ccc;
      line-height: 1.6;
   }
`;

export const Footer = styled.footer`
   text-align: center;
   padding: 20px;
   border-top: 1px solid rgba(255, 255, 255, 0.1);
   color: #888;
`;
