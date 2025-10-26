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
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.primaryDarkColor};
        color: ${colors.textPrimary};
        line-height: 1.6;
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
    /* ===== LINKS ===== */
    a {
        text-decoration: none;
        color: ${colors.primary};
        transition: ${colors.transitionFast};
        position: relative;

        &:hover {
            color: ${colors.primaryHover};
        }
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
    input, select, textarea {
        height: 48px;
        font-size: 16px;
        border: 2px solid ${colors.border};
        padding: 0 16px;
        border-radius: ${colors.radiusSm};
        margin-top: 5px;
        background: ${colors.surface2};
        color: ${colors.textPrimary};
        font-family: inherit;
        transition: ${colors.transition};

        &::placeholder {
            color: ${colors.textMuted};
        }

        &:focus {
            border-color: ${colors.primary};
            outline: none;
            background: ${colors.background};
            box-shadow: 0 0 0 3px ${colors.primaryLight};
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background: ${colors.surface1};
        }
    }
    select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23525252' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        padding-right: 40px;
    }
    textarea {
        height: auto;
        min-height: 120px;
        padding: 12px 16px;
        resize: vertical;
        line-height: 1.6;
    }
    form {
        max-width: 480px;
        margin: 40px auto 0 auto;
        margin-bottom: 0px;
        padding: 40px 32px;
        background: ${colors.surface1};
        border-radius: ${colors.radiusLg};
        box-shadow: ${colors.shadowLg};
        display: flex;
        flex-direction: column;
        gap: 24px;
        border: 1px solid ${colors.border};
    }

    form h1 {
        text-align: center;
        margin-bottom: 8px;
        font-size: 2rem;
        color: ${colors.textPrimary};
        font-weight: 700;
    }

    form .form-subtitle {
        text-align: center;
        color: ${colors.textSecondary};
        font-size: 0.95rem;
        margin-top: -16px;
        margin-bottom: 16px;
    }

    form label {
        font-weight: 600;
        color: ${colors.textPrimary};
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    form button[type="submit"] {
        margin-top: 8px;
        padding: 14px 0;
        font-size: 1.05em;
        font-weight: 700;
        border-radius: ${colors.radiusSm};
        background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
        color: #fff;
        border: none;
        transition: ${colors.transition};
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    form button[type="submit"]:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
    }
/* ===== TOAST NOTIFICATIONS ===== */
    .Toastify__toast-container {
        font-family: inherit;
    }

    .Toastify__toast {
        border-radius: ${colors.radiusSm};
        box-shadow: ${colors.shadowLg};
        font-weight: 500;
        padding: 16px;
    }

    .Toastify__toast--success {
        background: ${colors.success};
        color: #fff;
    }

    .Toastify__toast--error {
        background: ${colors.danger};
        color: #fff;
    }

    .Toastify__toast--info {
        background: ${colors.primary};
        color: #fff;
    }

    .Toastify__toast--warning {
        background: ${colors.warning};
        color: #fff;
    }

    .Toastify__progress-bar {
        background: rgba(255, 255, 255, 0.7);
    }

    /* ===== SCROLLBAR ===== */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${colors.surface2};
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 5px;

        &:hover {
            background: ${colors.primaryHover};
        }
    }

    /* ===== ANIMATIONS ===== */
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

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
    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
        form {
            padding: 32px 24px;
            margin: 20px;
        }

        form h1 {
            font-size: 1.5rem;
        }
    }
`;

export const Container = styled.section`
   max-width: 900px;
   width: 100%;
   height: auto;
   background: ${colors.background};
   margin: 30px auto;
   border-radius: ${colors.radiusXl};
   box-shadow: ${colors.shadowXl};
   border: 1px solid ${colors.border};
   overflow: hidden;
   animation: fadeInRight 0.6s ease-out;

   @media (max-width: 968px) {
      margin: 20px;
      border-radius: ${colors.radiusLg};
   }

   @media (max-width: 768px) {
      margin: 16px;
   }
`;
