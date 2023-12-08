<template>
  <q-page class="row items-center justify-evenly">
    <div style="min-width: 220px; max-width: 500px">
      <vertical-logo />
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
        @click="onPasswordRecovery"
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

export default defineComponent({
  name: 'LogIn',
  components: { VerticalLogo },
  methods: {
    onPasswordRecovery() {
      this.$router.push('/');
      this.showSuccessToast();
    },
  },
  setup() {
    const $q = useQuasar();

    return {
      user: ref(''),
      showSuccessToast() {
        $q.notify({
          message: 'E-mail de recuperação de senha enviado.',
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
