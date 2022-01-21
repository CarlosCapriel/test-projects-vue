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
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"
          class="h-3 w-3 fill-current">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </div>
      <div id="menu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                hover:text-gray-100 mr-4">
            Home
          </router-link>
          <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                  hover:text-gray-100 mr-4">
            About
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>
<script>
import iconPage from '@/assets/test_tube.svg';

export default {
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
  },
};
</script>

<style>
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
