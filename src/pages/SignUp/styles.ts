import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundimg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    width: 100%;
    max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form {
        margin: 40px 0;
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
