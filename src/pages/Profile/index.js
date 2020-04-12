import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input name="oldPassowrd" type="passowrd" placeholder="Senha atual" />
        <Input name="passowrd" type="passowrd" placeholder="Nova senha" />
        <Input
          name="confirmPassowrd"
          type="passowrd"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
