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
              );
              updateList();
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
              );
              updateList();
            "
          />
        </q-chip>
      </div>

      <div v-if="!publicWorks.length" class="text-h7 text-center">
        Não há obras com os filtros selecionados.
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
            <div class="text-subtitle2">{{ item.state }}</div>
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

declare interface PublicWorks {
  name: string;
  category: string;
  state: string;
}

const mockedPublicWorks = [
  {
    name: "Avenida Omar O'Grady",
    category: 'Mobilidade Urbana',
    state: 'RJ',
  },
  { name: 'Acquario do Ceará', category: 'Turismo', state: 'CE' },
  {
    name: 'Esgoto',
    category: 'Infraestrutura',
    state: 'RS',
  },
  {
    name: 'Estádio',
    category: 'Turismo',
    state: 'AM',
  },
  {
    name: 'Rodovia',
    category: 'Mobilidade Urbana',
    state: 'MS',
  },
  {
    name: 'Porto',
    category: 'Infraestrutura',
    state: 'RJ',
  },
];

export default defineComponent({
  name: 'FindPublicWorks',
  components: { FiltersDialog },
  watch: {
    search() {
      this.updateList();
    },
  },
  methods: {
    setFilters(selectedCategories: Filter[], selectedStates: Filter[]) {
      this.activeCategories = selectedCategories;
      this.activeStates = selectedStates;
      this.filtersDialogVisibility = false;
      this.updateList();
    },
    clearFilters() {
      this.activeCategories = [];
      this.activeStates = [];
      this.updateList();
    },
    updateList() {
      let updatedPublicWorks: PublicWorks[] = JSON.parse(
        JSON.stringify(mockedPublicWorks)
      );
      if (this.search.length) {
        updatedPublicWorks = updatedPublicWorks.filter((publicWorks) =>
          publicWorks.name.toUpperCase().includes(this.search.toUpperCase())
        );
      }
      if (this.activeCategories.length) {
        updatedPublicWorks = updatedPublicWorks.filter((publicWorks) =>
          this.activeCategories.some(
            (category) => category.label == publicWorks.category
          )
        );
      }
      if (this.activeStates.length) {
        updatedPublicWorks = updatedPublicWorks.filter((publicWorks) =>
          this.activeStates.some((state) => state.value == publicWorks.state)
        );
      }

      this.publicWorks = updatedPublicWorks;
    },
  },
  setup() {
    return {
      filtersDialogVisibility: ref(false),
      search: ref(''),
      activeStates: ref([] as Filter[]),
      activeCategories: ref([] as Filter[]),
      publicWorks: ref(mockedPublicWorks),
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
