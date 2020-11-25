import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;

/* export const Logo = styled.div`
    align-items: center;
`; */

export const Content = styled.div`
    position: absolute;
    width: 340px;
    height: 616px;
    left: 160px;
    top: 122px;

    p {
        width: 174px;
        height: 32px;
        top: 336px;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        /* identical to box height */
        text-align: baseline;
        padding: 20px;
        margin-bottom: 50px;
    }

    input {
        width: 340px;
        height: 50px;
        top: 392px;
        padding: 20px;
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 780px;
    height: 840px;
    left: 660px;
    top: 0px;

    mix-blend-mode: hard-light;
    opacity: 0.8;
`;
