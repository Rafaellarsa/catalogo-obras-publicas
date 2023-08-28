<template>
  <q-page class="row items-center justify-evenly">
    <div style="min-width: 220px; max-width: 500px">
      <h1>Recuperar senha</h1>
      <q-input
        filled
        v-model="user"
        label="Nome de usuário ou e-mail"
        class="q-mb-sm"
      />
      <q-btn
        color="primary"
        label="Recuperar senha"
        class="full-width q-my-md"
      />

      <p class="text-center">
        <router-link to="/">Voltar</router-link>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LogIn',
  setup() {
    return {
      user: ref(''),
    };
  },
});
</script>
