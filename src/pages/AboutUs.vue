<template>
  <q-page class="row items-center justify-evenly">
    <h1>Sobre nós</h1>
    <h2>Orientadores</h2>
    <h3>Leonardo Moreira</h3>
    <h4>email@email.com</h4>
    <h2>Orientanda</h2>
    <h3>Rafaella Sampaio de Alencar</h3>
    <h4>rafaellasalencar@gmail.com</h4>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutUs',
});
</script>

<style lang="sass" scoped>
h1
  width: 100%

h3
  font-size: 1.25rem
  line-height: 1.5rem
  font-weight: 700
  width: 100%

h4
  font-size: 1.25rem
  line-height: 1.5rem
  font-style: italic
  font-weight: 400
  width: 100%
</style>
