<template>
  <div id="nav">
    <div class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div class="flex items-center flex-shrink-0 text-gray-200 mr-6">
        <img :src="iconoWeb" alt="Icono Web" class="fill-current h-8 w-8">
        <span class="font-semibold text-xl tracking-tight">Test Projects</span>
      </div>
      <div class="block lg:hidden">
        <button id="boton" @click="showMenu"
                class="flex items-center px-3 py-2 border rounded border-t-2
                        text-gray-200 hover:text-gray-100 hover:bg-gray-100">
          <icon-base class="h-3 w-3 fill-current"> <menu-icon></menu-icon> </icon-base>
        </button>
      </div>
      <div id="menu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                hover:text-gray-100 mr-4">
            Inicio
          </router-link>
          <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                  hover:text-gray-100 mr-4">
            Nosotros
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <h1>scroll me</h1>
      <div
        v-scroll="handleScroll"
        class="box">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        adipisci beatae iure iste ipsum necessitatibus soluta laudantium culpa,
        eos facere, quisquam odit tempora vitae praesentium repellat impedit molestiae
        voluptatem molestias!</p>
      </div>
    </div>
  </div>
  <router-view/>
</template>
<script>
import iconPage from '@/assets/test_tube.svg';
import IconBase from '@/components/IconBase.vue';
import MenuIcon from '@/components/icons/Menu.vue';

export default {
  components: {
    IconBase,
    MenuIcon,
  },
  data() {
    return {
      iconoWeb: iconPage,
    };
  },
  methods: {
    showMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('hidden');
    },
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)',
        );
      }
      return window.scrollY > 100;
    },
  },
};
</script>

<style>
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
