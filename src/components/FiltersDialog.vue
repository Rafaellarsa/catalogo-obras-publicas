<template>
  <q-dialog
    :model-value="visibility"
    @update:model-value="(value) => $emit('update-visibility', value)"
  >
    <q-card>
      <q-card-section>
        <div class="text-h5">Filtros</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h6">Categorias</div>
        <q-option-group
          v-model="selectedCategories"
          :options="categories"
          color="secondary"
          type="checkbox"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h6">Estados</div>
        <div style="max-height: 200px" class="scroll">
          <q-option-group
            v-model="selectedStates"
            :options="states"
            color="secondary"
            type="checkbox"
          />
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          flat
          size="small"
          label="Cancelar"
          class="q-mr-md"
          @click="$emit('update-visibility', false)"
        />
        <q-btn
          color="primary"
          size="small"
          label="Aplicar filtros"
          @click="setFilters"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import statesList from 'src/utils/statesList.json';

declare interface Filter {
  value: number | string;
  label: string;
}

export default defineComponent({
  name: 'FilterDialog',
  props: {
    visibility: Boolean,
    activeStates: {
      type: Array as PropType<Filter[]>,
      required: true,
    },
    activeCategories: {
      type: Array as PropType<Filter[]>,
      required: true,
    },
  },
  watch: {
    visibility(newValue) {
      if (newValue) {
        this.selectedStates = this.activeStates.map((item) => item.value);
        this.selectedCategories = this.activeCategories.map(
          (item) => item.value
        );
      }
    },
  },
  methods: {
    setFilters() {
      this.$emit(
        'set-filters',
        this.categories.filter(({ value }) =>
          this.selectedCategories.includes(value)
        ),
        this.states.filter(({ value }) => this.selectedStates.includes(value))
      );
    },
  },
  setup() {
    return {
      selectedStates: ref([] as (string | number)[]),
      selectedCategories: ref([] as (string | number)[]),
      categories: [
        { value: 1, label: 'Mobilidade Urbana' },
        { value: 2, label: 'Turismo' },
        { value: 3, label: 'Infraestrutura' },
      ],
      states: statesList.map((item) => {
        return { value: item, label: item };
      }),
    };
  },
});
</script>
