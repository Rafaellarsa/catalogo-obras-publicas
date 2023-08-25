<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Encontre uma obra</h1>
      <div v-for="(category, index) of publicWorks" :key="index">
        <h2>{{ category.title }}</h2>

        <div style="display: flex">
          <q-card
            v-for="(item, index) of category.items"
            :key="index"
            class="card"
            @click="$router.push('/obra-exemplo')"
          >
            <q-img
              :ratio="5 / 8"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom">
                <div class="text-subtitle2">{{ item.subtitle }}</div>
                <div class="text-h6">{{ item.title }}</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FindPublicWorks',
  setup() {
    return {
      publicWorks: ref([
        {
          title: 'Por estado',
          items: [
            { title: 'Rio de Janeiro', subtitle: 'Estado' },
            { title: 'Ceará', subtitle: 'Estado' },
            { title: 'Rio Grande do Sul', subtitle: 'Estado' },
          ],
        },
        {
          title: 'Por categoria',
          items: [
            { title: 'Mobilidade Urbana', subtitle: 'Categoria' },
            { title: 'Turismo', subtitle: 'Categoria' },
            { title: 'Infraestrutura', subtitle: 'Categoria' },
          ],
        },
        {
          title: 'Por obra',
          items: [
            { title: "Avenida Omar O'Grady", subtitle: 'Mobilidade Urbana' },
            { title: 'Acquario do Ceará', subtitle: 'Turismo' },
            { title: 'Esgoto', subtitle: 'Infraestrutura' },
          ],
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
