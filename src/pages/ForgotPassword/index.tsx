/* eslint-disable react/jsx-indent-props */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, AnimationContainer, Background } from './styles';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    const handleSubmit = useCallback(
        async (data: ForgotPasswordFormData) => {
            try {
                setLoading(true);

                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('E-mail obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                api.post('/password/forgot', {
                    email: data.email,
                });
                addToast({
                    type: 'success',
                    title: 'E-mail de recuperação enviado',
                    description:
                        'Enviamos e-mail para confirmar a recuperação de senha.',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);

                    formRef.current?.setErrors(errors);

                    return;
                }
                addToast({
                    type: 'error',
                    title: 'Erro na recuperação da senha.',
                    description:
                        'Ocorreu um erro ao tentar recuperar a senha, tente novamente.',
                });
            } finally {
                setLoading(false);
            }
        },
        [addToast],
    );

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Recuperar senha</h1>

                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />

                        <Button loading={loading} type="submit">
                            Recuperar
                        </Button>
                    </Form>
                    <Link to="/signin">
                        <p className="register">
                            <FiLogIn />
                            Voltar ao login
                        </p>
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default ForgotPassword;
