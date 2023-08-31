<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="q-pt-md">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="black"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <MenuItem
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuItem from './components/MenuItem.vue';

const linksList = [
  {
    title: 'Início',
    icon: 'house',
    link: '/encontre-uma-obra',
  },
  {
    title: 'Adicionar obra',
    icon: 'add',
    link: '/nova-obra',
  },
  {
    title: 'Sobre nós',
    icon: 'info',
    link: '/sobre',
  },
  {
    title: 'Configurações',
    icon: 'settings',
    link: '/configuracoes',
  },
  {
    title: 'Sair',
    icon: 'logout',
    link: '/',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuItem,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass" scoped>
.q-header
  background-color: white
</style>
