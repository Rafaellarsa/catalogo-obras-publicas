<template>
  <q-page class="page">
    <q-btn
      unelevated
      round
      icon="arrow_back"
      class="back-icon"
      @click="$router.push('/encontre-uma-obra')"
    />

    <div style="max-width: 500px" class="q-pa-md q-mx-auto">
      <h1 class="page-title q-my-md">{{ publicWorks.name }}</h1>

      <div class="scrollable">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
          fermentum sem. Proin eleifend elementum pretium. Quisque egestas est a
          ligula finibus gravida. Vivamus at scelerisque lorem. Fusce non
          blandit arcu. Nunc elementum sed ipsum id ultrices. Curabitur luctus
          ultrices sagittis. Aenean vel nunc ut leo tempor finibus id ac mi.
          Etiam ullamcorper metus id augue aliquam vehicula. Ut id cursus
          tellus. Morbi mollis est vel ex feugiat scelerisque. Nam scelerisque
          varius nunc, at maximus elit viverra at. Duis convallis, mauris sed
          varius scelerisque, ex nulla egestas tortor, nec pellentesque magna
          nunc eget sapien.
        </p>

        <h2 class="q-my-md">Dados da obra</h2>

        <div><span>Data inicial</span></div>
        <div><span>Prazo original</span></div>
        <div><span>Dias de atraso</span></div>
        <div><span>Valor da obra</span></div>
        <div><span>Valor gasto</span></div>

        <h2 class="q-my-md">Galeria</h2>
        <div class="gallery">
          <q-img
            v-for="(img, index) of Array(4)"
            :key="index"
            :ratio="5 / 8"
            src="https://armac.com.br/wordpress/wp-content/uploads/2022/09/armac-pas-carregadeiras-realizando-fundacao-de-obra-blog.jpeg"
          />
        </div>

        <h2 class="q-my-md">Comentários</h2>
        <div v-for="(comment, index) of comments" :key="index">
          <h3>{{ comment.author }}</h3>
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PublicWorksDetails',
  setup() {
    return {
      publicWorks: ref({
        name: 'Rodovia 4º Anel Viário',
        initialDate: 'Rodovia 4º Anel Viário',
        originalDeadline: 'Rodovia 4º Anel Viário',
        plannedCost: 'Rodovia 4º Anel Viário',
        currentCost: 'Rodovia 4º Anel Viário',
      }),
      comments: ref(
        Array(3).fill({
          author: 'José da Silva',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a fermentum sem.',
        })
      ),
    };
  },
});
</script>

<style lang="sass" scoped>
.page
  background-image: linear-gradient(to bottom, transparent, #000 30%), url(https://cdn.quasar.dev/img/parallax2.jpg)
  background-repeat: no-repeat
  background-size: 100vw auto
  background-color: #000
  color: #FFF

.back-icon
  position: absolute
  top: 1rem
  left: 1rem
  z-index: 1
  // background-color: rgba(255, 255, 255, 0.8)

.page-title
  position: absolute
  top: 10rem
  font-size: 2rem
  line-height: 2.25rem
  font-weight: 500

.scrollable
  margin-top: 14rem
  padding: 0 1rem
  height: calc(100vh - 16rem)
  overflow-y: auto

h2
  color: #FFF

h3
  font-size: 1rem
  line-height: 1.5rem

.gallery
  display: flex
  overflow-x: scroll

.gallery > .q-img
  flex-shrink: 0
  margin-right: 1rem
  width: 6rem
</style>
