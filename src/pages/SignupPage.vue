<template>
  <q-page class="row items-center justify-evenly">
    <div style="max-width: 400px">
      <h1>Cadastre-se</h1>
      <q-input
        filled
        v-model="user"
        label="Nome de usuário"
        class="q-mb-sm"
      />
      <q-input
        filled
        v-model="email"
        label="E-mail"
        class="q-mb-sm"
      />

      <q-input
        filled
        v-model="password"
        :type="isPasswordHidden ? 'password' : 'text'"
        label="Senha"
        class="q-mb-sm"
      >
        <template v-slot:append>
          <q-icon
            :name="isPasswordHidden ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="primary"
            @click="isPasswordHidden = !isPasswordHidden"
          />
        </template>
      </q-input>
      <q-input
        filled
        v-model="passwordConfirmation"
        :type="isPasswordConfirmationHidden ? 'password' : 'text'"
        label="Reescreva sua senha"
        class="q-mb-md"
      >
        <template v-slot:append>
          <q-icon
            :name="isPasswordConfirmationHidden ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="primary"
            @click="isPasswordConfirmationHidden = !isPasswordConfirmationHidden"
          />
        </template>
      </q-input>

      <q-btn color="primary" label="Criar conta" class="full-width q-mb-md" />
      <p class="text-center">
        <a href="/">Voltar</a>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    return {
      user: ref(''),
      email: ref(''),
      password: ref(''),
      passwordConfirmation: ref(''),
      isPasswordHidden: ref(true),
      isPasswordConfirmationHidden: ref(true),
    };
  },
});
</script>
