import styled from 'styled-components';
import * as colors from '../../config/colors';

export const GerenciarContainer = styled.div`
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
      justify-content: center;
      align-items: center;
   }
   button {
      margin: 10px 10px;
   }
   position: relative;
   width: 100%; // para se ajustar ao container pai

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid #ccc;
      position: absolute;
      width: 100%;
      background-color: white;
      z-index: 10;
      margin-top: 5px; // pequeno espaço
   }

   li {
      padding: 10px;
      cursor: pointer;
   }

   li:hover {
      background-color: #f0f0f0;
   }

   li.highlighted {
      background-color: #e0e0e0;
      font-weight: bold;
   }
`;
