<template>
  <q-page class="row items-center justify-evenly">
    <div style="max-width: 500px">
      <vertical-logo />
      <h1>Cadastre-se</h1>
      <q-input filled v-model="user" label="Nome de usuário" class="q-mb-sm" />
      <q-input filled v-model="email" label="E-mail" class="q-mb-sm" />

      <password-input v-model="password" />
      <password-input
        v-model="passwordConfirmation"
        label="Reescreva sua senha"
      />

      <q-btn
        color="primary"
        label="Criar conta"
        class="full-width q-my-md"
        @click="onSignUp"
      />
      <p class="text-center">
        <router-link to="/">Voltar</router-link>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import VerticalLogo from 'src/components/VerticalLogo.vue';
import PasswordInput from 'src/components/PasswordInput.vue';

export default defineComponent({
  name: 'SignUp',
  components: { VerticalLogo, PasswordInput },
  methods: {
    onSignUp() {
      this.$router.push('/');
      this.showSuccessToast();
    },
  },
  setup() {
    const $q = useQuasar();

    return {
      user: ref(''),
      email: ref(''),
      password: ref(''),
      passwordConfirmation: ref(''),
      showSuccessToast() {
        $q.notify({
          message: 'Conta criada com sucesso.',
          color: 'primary',
          actions: [
            {
              icon: 'close',
              color: 'white',
              round: true,
            },
          ],
        });
      },
    };
  },
});
</script>
