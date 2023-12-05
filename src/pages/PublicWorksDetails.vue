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
        <p>Colabore! Ajude a fiscalizar os gastos públicos com obras!</p>

        <h2 class="q-mt-xl q-mb-md">Dados da obra</h2>

        <div class="infoItem">
          <span>Data inicial</span><span>{{ publicWorks.initialDate }}</span>
        </div>
        <div class="infoItem">
          <span>Prazo original</span
          ><span>
            {{ new Date(publicWorks.originalDeadline).toLocaleDateString() }}
          </span>
        </div>
        <div class="infoItem">
          <span>Dias de atraso</span><span>{{ getDelay() }}</span>
        </div>
        <div class="infoItem">
          <span>Valor da obra</span><span>{{ publicWorks.plannedCost }}</span>
        </div>

        <h2 class="q-mt-xl q-mb-md">Galeria</h2>
        <div class="gallery">
          <q-img
            v-for="(img, index) of Array(4)"
            :key="index"
            :ratio="5 / 8"
            src="https://armac.com.br/wordpress/wp-content/uploads/2022/09/armac-pas-carregadeiras-realizando-fundacao-de-obra-blog.jpeg"
          />
        </div>

        <h2 class="q-mt-xl q-mb-md">Comentários</h2>
        <div v-for="(comment, index) of comments" :key="index">
          <div style="display: flex">
            <q-img
              alt="Imagem de usuário"
              src="../assets/user.png"
              width="40px"
              height="40px"
            />
            <h3 style="margin: 0 0 0 1rem; align-self: center">
              {{ comment.author }}
            </h3>
          </div>
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
    const originalDeadline = '2023-04-26';
    const getDelay = () => {
      const today = new Date();
      const differenceInMilisec =
        today.getTime() - new Date(originalDeadline).getTime();
      return Math.ceil(differenceInMilisec / (1000 * 3600 * 24));
    };

    return {
      publicWorks: ref({
        name: 'Rodovia 4º Anel Viário',
        initialDate: '10/08/2022',
        originalDeadline,
        plannedCost: 'R$ 36.450.000,00',
      }),
      getDelay,
      comments: ref(
        Array(3).fill({
          author: 'José da Silva',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a fermentum sem.',
        })
      ),
      newComment: ref(''),
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

.infoItem
  margin-bottom: 1rem

.infoItem > span:first-child
  display: inline-block
  width: 8rem

.gallery
  display: flex
  overflow-x: scroll

.gallery > .q-img
  flex-shrink: 0
  margin-right: 1rem
  width: 6rem
</style>
