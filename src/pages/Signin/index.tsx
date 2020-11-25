import React from 'react';
import { Container, Content, Background } from './styles';
import logoimg from '../../assets/Logo.svg';
import backgroundimg from '../../assets/sign-in-background.png';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoimg} alt="Logo escrito o texto Gobarber" />
            <p>Faça seu Logon</p>
            <input type="text" />
            <input type="text" />
        </Content>
        <Background>
            <img src={backgroundimg} alt="Pessoa cortando cabelo" />
        </Background>
    </Container>
);

export default SignIn;
