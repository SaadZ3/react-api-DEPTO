import styled from 'styled-components';
import * as colors from '../../config/colors';

export const GerenciarContainer = styled.div`
   margin: 0 0 32px 0; // só margem inferior
   padding: 30px;
   background: #f8feffff;
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
   }
   button {
      margin: 10px 10px;
   }
`;
