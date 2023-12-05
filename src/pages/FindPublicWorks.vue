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

      <div style="display: flex" class="q-mt-md">
        <q-btn
          outline
          dense
          color="secondary"
          size="sm"
          icon="filter_alt"
          label="Filtros"
          class="q-px-sm"
          @click="filtersDialogVisibility = true"
        />
        <q-btn
          v-if="activeStates.concat(activeCategories).length"
          flat
          dense
          size="sm"
          icon="close"
          label="Limpar filtros"
          class="q-ml-sm"
          @click="clearFilters"
        />
      </div>

      <div style="display: flex; flex-wrap: wrap" class="q-mb-md">
        <q-chip
          v-for="state in activeStates"
          :key="state.value"
          outline
          color="primary"
          size="sm"
          class="q-ml-none q-pr-xs"
        >
          {{ state.label }}
          <q-btn
            round
            flat
            size="xs"
            icon="close"
            @click="
              activeStates = activeStates.filter(
                ({ value }) => value !== state.value
              )
            "
          />
        </q-chip>
        <q-chip
          v-for="category in activeCategories"
          :key="category.value"
          outline
          color="primary"
          size="sm"
          class="q-ml-none q-pr-xs"
        >
          {{ category.label }}
          <q-btn
            round
            flat
            size="xs"
            icon="close"
            @click="
              activeCategories = activeCategories.filter(
                ({ value }) => value !== category.value
              )
            "
          />
        </q-chip>
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

    <FiltersDialog
      :visibility="filtersDialogVisibility"
      :activeStates="activeStates"
      :activeCategories="activeCategories"
      @update-visibility="(value) => (filtersDialogVisibility = value)"
      @set-filters="setFilters"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FiltersDialog from 'src/components/FiltersDialog.vue';

declare interface Filter {
  value: number | string;
  label: string;
}

export default defineComponent({
  name: 'FindPublicWorks',
  components: { FiltersDialog },
  methods: {
    setFilters(selectedCategories: Filter[], selectedStates: Filter[]) {
      this.activeCategories = selectedCategories;
      this.activeStates = selectedStates;
      this.filtersDialogVisibility = false;
    },
    clearFilters() {
      this.activeCategories = [];
      this.activeStates = [];
    },
  },
  setup() {
    return {
      filtersDialogVisibility: ref(false),
      search: ref(''),
      activeStates: ref([] as Filter[]),
      activeCategories: ref([] as Filter[]),
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
