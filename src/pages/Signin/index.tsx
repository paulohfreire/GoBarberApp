import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, AnimationContainer, Background } from './styles';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('E-mail obrigatório'),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });
                history.push('/dashboard');
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);

                    formRef.current?.setErrors(errors);

                    return;
                }
                addToast({
                    type: 'error',
                    title: 'Erro na autenticação',
                    description:
                        'Ocorreu um erro ao fazer login, cheque as credenciais.',
                });
            }
        },
        [signIn, addToast, history],
    );

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu Login</h1>

                        <Input
                          name="email"
                          icon={FiMail}
                          placeholder="E-mail"
                        />
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
                    </Form>
                    <Link to="/signup">
                        <p className="register">
                            <FiLogIn />
                            Criar Conta
                        </p>
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
