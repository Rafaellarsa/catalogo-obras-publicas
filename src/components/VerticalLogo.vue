<template>
  <div class="logo-container">
    <q-img
      alt="Logo do sistema"
      src="../assets/construction.png"
      width="100px"
      position="center"
    />
    <div class="app-title">Tô de olho</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerticalLogo',
});
</script>

<style lang="sass" scoped>
.logo-container
  display: flex
  flex-direction: column
  align-items: center
.app-title
  font-family: 'Squada One', sans-serif
  font-weight: 400
  font-size: 2rem
  letter-spacing: 0.2rem
  color: $secondary
  text-transform: uppercase
</style>
