<template>
  <q-page class="row items-center justify-evenly">
    <div style="max-width: 400px">
      <h1>Acesse sua conta</h1>
      <q-input
        filled
        v-model="user"
        label="Nome de usuário ou e-mail"
        class="q-mb-sm"
      />
      <q-input
        filled
        v-model="password"
        :type="isPasswordHidden ? 'password' : 'text'"
        label="Senha"
        class="q-mb-md"
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

      <q-btn color="primary" label="Entrar" class="full-width q-mb-md" />
      <p class="text-center">
        <a href="#/cadastro">Esqueceu sua senha?</a>
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
      password: ref(''),
      isPasswordHidden: ref(true),
    };
  },
});
</script>
