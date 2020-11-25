import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Logo escrito o texto Gobarber" />
            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button type="submit">Entrar</button>
                <Link to="/">
                    <p>Esqueci minha senha</p>
                </Link>
            </form>
            <Link to="/">
                <p className="register">
                    <FiLogIn />
                    Criar Conta
                </p>
            </Link>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
