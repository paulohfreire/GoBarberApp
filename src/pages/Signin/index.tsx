import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Logo escrito o texto Gobarber" />
            <form>
                <h1>Faça seu Login</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                  name="password"
                  icon={FiLock}
                  type="password"
                  placeholder="Senha"
                />
                <Button type="submit">Entrar</Button>
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
