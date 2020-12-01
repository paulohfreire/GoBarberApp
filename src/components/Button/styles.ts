import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;