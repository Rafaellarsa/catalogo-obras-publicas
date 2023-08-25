<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Configurações de conta</h1>

      <div class="profile-photo">
        <q-img
          alt="Imagem de usuário"
          src="../assets/user.png"
          width="100px"
          position="center"
        />
        <q-btn
          round
          color="primary"
          size="sm"
          icon="edit"
          class="photo-edit-btn"
        />
      </div>

      <p class="text-center q-mt-md">Fulano</p>
      <p class="text-center">email@email.com</p>

      <password-input v-model="password" />

      <p class="text-center q-mt-lg">Nova senha (opcional)</p>

      <password-input v-model="newPassword" label="Nova senha" />
      <password-input
        v-model="newPasswordConfirmation"
        label="Reescreva nova senha"
      />

      <q-btn
        color="primary"
        label="Salvar alterações"
        class="full-width q-mt-md"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PasswordInput from 'src/components/PasswordInput.vue';

export default defineComponent({
  name: 'UserSettings',
  components: { PasswordInput },
  setup() {
    return {
      password: ref(''),
      newPassword: ref(''),
      newPasswordConfirmation: ref(''),
    };
  },
});
</script>

<style lang="sass" scoped>
.profile-photo
  position: relative
  width: 100px
  margin: 0 auto

.photo-edit-btn
  position: absolute
  bottom: -10px
  right: -10px
</style>
