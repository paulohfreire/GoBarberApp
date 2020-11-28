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
            color: #f4ede8;
        }

        svg {
            margin-right: 10px;
        }
        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
    a {
        color: #f4ede8;
        display: block; // o que faz?

        margin-top: 15px;
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
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center;
    background-size: cover;
`;
