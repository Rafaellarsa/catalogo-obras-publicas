<template>
  <q-page class="row items-center justify-evenly">
    <div style="max-width: 500px">
      <vertical-logo />
      <h1>Acesse sua conta</h1>
      <q-input
        filled
        v-model="user"
        label="Nome de usuário ou e-mail"
        class="q-mb-sm"
      />
      <password-input v-model="password" />

      <q-btn
        to="/encontre-uma-obra"
        color="primary"
        label="Entrar"
        class="full-width q-my-md"
      />
      <p class="text-center">
        <router-link to="/recuperar-senha">Esqueceu sua senha?</router-link>
      </p>

      <p class="text-center">ou</p>

      <q-btn
        to="/cadastro"
        color="primary"
        outline
        label="Criar nova conta"
        class="full-width"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VerticalLogo from 'src/components/VerticalLogo.vue';
import PasswordInput from 'src/components/PasswordInput.vue';

export default defineComponent({
  name: 'LogIn',
  components: { VerticalLogo, PasswordInput },
  setup() {
    return {
      user: ref(''),
      password: ref(''),
    };
  },
});
</script>
