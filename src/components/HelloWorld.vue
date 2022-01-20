<template>
  <div class="container mx-auto my-auto">
    <h1>{{ msg }}</h1>
    <card :src="direccionImg" :hashtags="hashtags">
      <template v-slot:titleCard>
        Title of Card
      </template>
      <template v-slot:content>
        The description of the card you know basic information
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum quod rerum tenetur illum dolorum voluptatum quae,
           reiciendis perferendis ea ab? Quaerat eius voluptatem,
           illum rerum ducimus nihil nulla amet repellendus?
      </template>
    </card>
    <div class="my-5 border-2 p-5 bg-blue-500 lg:bg-green-600 rounded-lg shadow-lg">
      <h1 class="mb-5 text-2xl text-gray-200 text-left uppercase">Title of content</h1>
      <p class=" text-xl sm:text-base text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate
        repudiandae iste. Ipsum fugiat nobis quisquam. Neque quidem distinctio tempore,
        commodi magni placeat vero. Dolorum assumenda eaque ducimus vitae mollitia.
      </p>
    </div>
  </div>
</template>

<script>
import spaceMan from '@/assets/spacemen.jpg';
import Card from './Card.vue';

export default {
  name: 'HelloWorld',
  components: {
    Card,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      hashtags: ['themanonthemoon', 'spaceman'],
      // Razón por el cual pasamos la imagen de este modo
      // El problema es que cuando pasas una imagen desde los assets, esto en realidad
      // se pasa como un texto en los componentes y por ello no muestra nada,
      // por que la etiqueta imagen de html espera una url
      direccionImg: spaceMan,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
