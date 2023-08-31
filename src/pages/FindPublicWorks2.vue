<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Encontre uma obra</h1>
      <q-input
        v-model="search"
        placeholder="Pesquisar..."
        class="q-mx-auto"
        dense
        outlined
      />

      <div style="display: flex; justify-content: space-between">
        <q-select
          multiple
          v-model="category"
          :options="categories"
          label="Categoria"
          class="q-mb-sm"
          style="width: 55%"
        />
        <q-select
          v-model="state"
          :options="states"
          label="UF"
          class="q-mb-sm"
          style="width: 40%"
        />
      </div>

      <q-card
        v-for="(item, index) of publicWorks"
        :key="index"
        class="card q-mb-sm"
        @click="$router.push('/obra-exemplo')"
      >
        <q-card-section horizontal>
          <q-img
            class="col-5"
            width="100"
            height="100"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />

          <q-card-section>
            <div class="text-subtitle2">{{ item.category }}</div>
            <div class="text-h6">{{ item.name }}</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import statesList from 'src/utils/statesList.json';

export default defineComponent({
  name: 'FindPublicWorks2',
  setup() {
    return {
      search: ref(''),
      category: ref(null),
      categories: ['Mobilidade Urbana', 'Turismo', 'Infraestrutura'],
      state: ref('BR'),
      states: ['BR', ...statesList],
      publicWorks: ref([
        {
          name: "Avenida Omar O'Grady",
          category: 'Mobilidade Urbana',
          state: 'Rio de Janeiro',
        },
        { name: 'Acquario do Ceará', category: 'Turismo', state: 'Ceará' },
        {
          name: 'Esgoto',
          category: 'Infraestrutura',
          state: 'Rio Grande do Sul',
        },
      ]),
    };
  },
});
</script>

<style lang="sass" scoped>
.card
  width: 100%
  border-radius: 0
  margin-right: 0.75rem
  cursor: pointer
</style>
