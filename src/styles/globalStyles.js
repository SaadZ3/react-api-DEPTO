import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css'; // importando o css do react-toastify

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryDarkColor};
        color: ${colors.primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer; // deixa o cursor em forma de mãozinha quando passa por cima do botão
        background: ${colors.primaryColor};
        border: none;
        color: #ffffffff;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 1em;
        transition: all 300ms;
    }
    button:hover {
      filter: brightness(0.8); // deixa o botão um pouco mais escuro quando passa o mouse por cima
    }
    a {
        text-decoration: none; // tira o sublinhado dos links
        color: ${colors.primaryColor};
    }
    ul {
        list-style: none; // tira as bolinhas das listas
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor};
        color: #ffffffff;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.errorColor};
        color: #fff;
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
    form {
        max-width: 400px;
        margin: 40px auto 0 auto;
        padding: 32px 24px 24px 24px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    form h1 {
        text-align: center;
        margin-bottom: 24px;
        font-size: 2rem;
        color: ${colors.primaryColor};
    }

    form label {
        font-weight: 500;
        color: ${colors.primaryDarkColor};
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    form input {
        height: 40px;
        font-size: 16px;
        border: 1px solid #ccc;
        padding: 0 10px;
        border-radius: 5px;
        margin-top: 5px;
        background: #f8f8f8;
        transition: border 0.2s;
    }

    form input:focus {
        border: 1.5px solid ${colors.primaryColor};
        background: #fff;
    }

    form button {
        margin-top: 12px;
        padding: 12px 0;
        font-size: 1.1em;
        font-weight: 600;
        border-radius: 6px;
        background: ${colors.primaryColor};
        color: #fff;
        border: none;
        transition: background 0.2s, filter 0.2s;
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }

    form button:hover {
        filter: brightness(0.9);
        background: ${colors.primaryDarkColor};
    }

`;

export const Container = styled.section`
   max-width: 780px;
   background: #f8feffff;
   margin: 30px auto;
   padding: 0px;
   border-radius: ${colors.radiusXl};
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
