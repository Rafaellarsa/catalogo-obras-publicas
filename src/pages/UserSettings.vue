<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Configurações de conta</h1>

      <div class="profile-photo">
        <q-img
          alt="Imagem de usuário"
          :src="profilePhotoUrl"
          width="100px"
          height="100px"
          position="center"
        />
        <q-btn
          round
          color="primary"
          size="sm"
          icon="edit"
          class="photo-edit-btn"
          @click="chooseProfilePhoto"
        />

        <q-file
          ref="fileRef"
          v-model="uploadedPhoto"
          style="display: none"
          @update:model-value="handlePhotoUpload"
        />
      </div>

      <p class="text-center q-mt-md">Usuário de Teste</p>
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
        @click="onSaveChanges"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { useQuasar } from 'quasar';
import { QFile } from 'quasar';
import PasswordInput from 'src/components/PasswordInput.vue';

export default defineComponent({
  name: 'UserSettings',
  components: { PasswordInput },
  methods: {
    onSaveChanges() {
      this.$router.push('/encontre-uma-obra');
      this.showSuccessToast();
    },
  },
  setup() {
    const $q = useQuasar();
    const fileRef = ref<QFile>() as Ref<QFile>;
    const uploadedPhoto = ref();
    const profilePhotoUrl = ref('src/assets/user.png');

    const chooseProfilePhoto = () => {
      fileRef.value.pickFiles();
    };

    const handlePhotoUpload = () => {
      if (uploadedPhoto.value) {
        profilePhotoUrl.value = URL.createObjectURL(uploadedPhoto.value);
      } else {
        profilePhotoUrl.value = 'src/assets/user.png';
      }
    };

    return {
      password: ref(''),
      newPassword: ref(''),
      newPasswordConfirmation: ref(''),
      profilePhotoUrl,
      uploadedPhoto,
      fileRef,
      chooseProfilePhoto,
      handlePhotoUpload,
      showSuccessToast() {
        $q.notify({
          message: 'Informações da conta atualizadas com sucesso.',
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
