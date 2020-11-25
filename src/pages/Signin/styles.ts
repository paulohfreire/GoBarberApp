import styled from 'styled-components';
import { shade } from 'polished';

import backgroundimg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center; // conteudo vai ficar no centro
    margin-top: 30px;

    width: 100%;
    max-width: 700px;

    form {
        margin: 60px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            color: #666360;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            &::placeholder {
                color: #666360;
            }
            & + input {
                margin-top: 8px; // input de baixo fica c margem top para o de cima
            }
        }
    }
    button {
        background: #ff9000;
        height: 56px;
        width: 100%;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38; // cor do texto

        margin-top: 16px;
        font-weight: 500; // negrito para o texto

        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }
    }
    a {
        color: #f4ede8;
        display: block; // o que faz?
        margin-top: 24px;
        text-decoration: none;
        transition: 0.2s;
        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }

    > a {
        color: #ff9000; // > a siginifica que vai alterar somente o "a" mais externo
        display: block;
        margin: 15px 20px 15px 0;

        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center;
    background-size: cover;
`;
