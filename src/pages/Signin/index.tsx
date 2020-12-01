import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
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
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo escrito o texto Gobarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
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
                </Form>
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
};

export default SignIn;
