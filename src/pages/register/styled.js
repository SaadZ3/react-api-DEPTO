import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 20px;

   label {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
   }

   input {
      height: 40px;
      font-size: 16px;
      border: 1px solid #ccc;
      padding: 0 10px;
      border-radius: 5px;
      margin-top: 5px;

      &:focus {
         border: 1px solid ${colors.primaryColor};
         outline: none;
      }
   }

   div {
      display: flex;
      gap: 10px;
      margin: 10px;
      justify-content: center;
   }
   div label {
      padding: 10px 20px;
      border: 2px solid #c70039;
      border-radius: 7px;
      cursor: pointer;
      font-weight: bold;
      color: #c70039;
      background-color: white;
      transition:
         background-color 0.3s,
         color 0.3s;
      user-select: none;
   }

   /* Oculta o radio original */
   div input[type='radio'] {
      display: none;
   }
   /* Aplica estilo quando estiver selecionado */
   div label.selected {
      background-color: #c70039;
      color: white;
   }
`;
