import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
   background: ${primaryColor};
   padding: 20px;
   display: flex;
   align-items: center; // alinha verticalmente
   justify-content: center; // alinha horizontalmente

   a {
      color: #fff;
      margin: 0 15px 0 0;
      font-weight: bold;
   }
   div {
      margin-left: auto;
      display: flex;
   }
`;
