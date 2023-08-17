<template>
  <q-page>
    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1>Sobre nós</h1>
      <h2>Orientadores</h2>
      <h3>Leonardo O. Moreira</h3>
      <h4>leoomoreira@virtual.ufc.br</h4>
      <h3>Gabriel A. L. Paillard</h3>
      <h4>gabriel@virtual.ufc.br</h4>
      <h2>Orientanda</h2>
      <h3>Rafaella Sampaio de Alencar</h3>
      <h4>rafaellasalencar@gmail.com</h4>
    </div>
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
  margin-bottom: 0.5rem

h4
  font-size: 1rem
  line-height: 1.25rem
  font-style: italic
  font-weight: 400
  width: 100%
  margin-top: 0.5rem
</style>
