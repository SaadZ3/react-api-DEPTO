import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
   background: ${colors.secondaryDarkColor};
   padding: 20px 4%;
   display: flex;
   align-items: center; // alinha verticalmente
   justify-content: space-between;
   border-bottom: 1px solid rgba(255, 255, 255, 0.1);

   .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
      color: ${colors.primaryColor};
   }
   div {
      display: flex;
      align-items: center;
      gap: 20px;
   }
   .nav-link,
   .nav-link-login {
      color: #fff;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.3s;

      &:hover {
         color: ${colors.primaryColor};
      }
   }

   .nav-link-login {
      background: ${colors.primaryColor};
      padding: 8px 16px;
      border-radius: 5px;

      &:hover {
         color: #fff;
         filter: brightness(1.1);
      }
   }
`;
