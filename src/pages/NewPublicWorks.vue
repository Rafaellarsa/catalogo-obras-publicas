<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Adicionar obra</h1>

      <q-input
        filled
        v-model="location"
        label="Selecionar localização"
        class="q-mb-sm"
      >
        <template v-slot:append>
          <q-icon name="place" />
        </template>
      </q-input>

      <h3>Dados da obra</h3>

      <q-input filled v-model="name" label="Nome da obra" class="q-mb-sm" />
      <div style="display: flex; justify-content: space-between">
        <q-select
          filled
          v-model="category"
          :options="categories"
          label="Categoria"
          class="q-mb-sm"
          style="width: 55%"
        />
        <q-select
          filled
          v-model="state"
          :options="states"
          label="UF"
          class="q-mb-sm"
          style="width: 40%"
        />
      </div>
      <q-input filled v-model="city" label="Cidade" class="q-mb-sm" />
      <q-input
        filled
        v-model="startDate"
        label="Data de início"
        mask="##/##/####"
        class="q-mb-sm"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="startDate" mask="DD/MM/YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Fechar" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        filled
        v-model="deadline"
        label="Prazo da obra"
        mask="##/##/####"
        class="q-mb-sm"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="deadline" mask="DD/MM/YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Fechar" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input filled v-model="budget" label="Orçamento" class="q-mb-sm" />

      <h3>Galeria da obra</h3>

      <q-file
        filled
        v-model="image"
        label="Adicione imagens..."
        @update:model-value="handleUpload()"
      />

      <q-img
        :src="imageUrl"
        spinner-color="white"
        style="height: 60px; max-width: 60px"
      />

      <q-input
        filled
        v-model="description"
        label="Descrição"
        type="textarea"
        class="q-mb-md"
      />

      <q-btn
        color="primary"
        label="Cadastrar Obra"
        class="full-width q-mb-md"
        @click="onAddPublicWorks"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import statesList from 'src/utils/statesList.json';

export default defineComponent({
  name: 'NewPublicWorks',
  methods: {
    onAddPublicWorks() {
      this.$router.push('/encontre-uma-obra');
      this.showSuccessToast();
    },
  },
  setup() {
    const $q = useQuasar();

    const image = ref(null);
    const imageUrl = ref('');
    const handleUpload = () => {
      if (image.value) {
        imageUrl.value = URL.createObjectURL(image.value);
      }
    };

    return {
      location: ref(''),
      name: ref(''),
      category: ref(null),
      state: ref(null),
      city: ref(''),
      startDate: ref(''),
      deadline: ref(''),
      budget: ref(''),
      description: ref(''),
      categories: ['Mobilidade Urbana', 'Turismo', 'Infraestrutura'],
      states: statesList,
      image,
      imageUrl,
      handleUpload,
      showSuccessToast() {
        $q.notify({
          message: 'Nova obra pública cadastrada com sucesso.',
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
h3
  font-size: 1rem
  line-height: 1.25rem
  font-weight: 700
  width: 100%
  margin-bottom: 0.5rem
</style>
