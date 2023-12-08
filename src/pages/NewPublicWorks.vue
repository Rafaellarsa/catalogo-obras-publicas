<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Adicionar obra</h1>

      <q-input
        filled
        v-model="location"
        label="Selecionar localização"
        :loading="loadingGeolocation"
        class="q-mb-lg"
        hint='Clique no ícone para obter posição atual ou digite a latitude e a longitude no formato "-3.9999, -38.9999"'
      >
        <template v-slot:append v-if="!loadingGeolocation">
          <q-icon
            name="place"
            color="primary"
            class="cursor-pointer"
            @click="getCurrentLocation"
          />
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
          <q-icon name="event" class="cursor-pointer" color="primary">
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
          <q-icon name="event" class="cursor-pointer" color="primary">
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
        multiple
        v-model="images"
        label="Adicione imagens..."
        accept=".jpg, image/*"
        @update:model-value="handleUpload()"
      />

      <q-img
        v-for="(url, index) of imageUrls"
        :key="index"
        :src="url"
        spinner-color="white"
        style="height: 60px; max-width: 60px"
      />

      <q-input
        filled
        v-model="description"
        label="Descrição"
        type="textarea"
        class="q-my-md"
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
      this.showToast('primary', 'Nova obra pública cadastrada com sucesso.');
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        this.loadingGeolocation = true;
        navigator.geolocation.getCurrentPosition(
          this.setPosition,
          this.geolocationNotAvailable
        );
      }
    },
    setPosition(position: GeolocationPosition) {
      this.location =
        position?.coords?.latitude + ', ' + position?.coords?.longitude;
      this.loadingGeolocation = false;
    },
    geolocationNotAvailable() {
      this.showToast('secondary', 'Erro ao utilizar geolocalização.');
      this.loadingGeolocation = false;
    },
  },
  setup() {
    const $q = useQuasar();

    const images = ref([]);
    const imageUrls = ref([] as (string | undefined)[]);
    const handleUpload = () => {
      const newImageUrls = images.value.map((image) => {
        if (image) {
          return URL.createObjectURL(image);
        }
      });
      imageUrls.value = newImageUrls.filter((value) => value != undefined);
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
      images,
      imageUrls,
      loadingGeolocation: ref(false),
      handleUpload,
      showToast(color: string, message: string) {
        $q.notify({
          message,
          color,
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
