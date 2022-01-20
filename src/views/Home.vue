<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container mx-auto mt-5 text-center">
      <h1 class="font-semibold text-2xl sm:text-xl">Práctica con grid</h1>
      <div class="grid grid-cols-1 sm:grid-cols-4 grid-rows-6 sm:grid-rows-2 gap-4">
        <div class="bg-gray-500">A</div>
        <div class="bg-gray-500">B</div>
        <div class="bg-gray-500 col-span-1 sm:col-span-2 row-span-2 sm:row-span-2">C</div>
        <div class="bg-gray-500">D</div>
        <div class="bg-gray-500">E</div>
      </div>
    </div>
    <div class="container mx-auto mt-5 text-center">
      <h1 class="font-semibold text-2xl sm:text-xl">Ejercicios con grid</h1>
      <div class="grid grid-cols-3 gap-4 my-5">
        <div class="bg-red-400">
          A
        </div>
        <div class="bg-red-500">
          B
        </div>
        <div class="bg-red-600">
          C
        </div>
        <div class="bg-red-500">
          D
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 my-5">
        <div class="bg-blue-400">
          A
        </div>
        <div class="bg-blue-500">
          B
        </div>
        <div class="bg-blue-600">
          C
        </div>
        <div class="bg-blue-500">
          D
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 my-5">
        <div class="bg-pink-400 col-span-2">
          A
        </div>
        <div class="bg-pink-500">
          B
        </div>
        <div class="bg-pink-600 col-span-3">
          C
        </div>
        <div class="bg-pink-500">
          D
        </div>
      </div>
      <div class="grid grid-cols-4 gap-y-4">
        <div class="bg-green-500">A</div>
        <div class="bg-green-100">A</div>
        <div class="bg-green-200">A</div>
        <div class="bg-green-300">A</div>
        <div class="bg-green-400">A</div>
        <div class="bg-green-500">A</div>
        <div class="bg-green-600">A</div>
        <div class="bg-green-800">A</div>
        <div class="bg-green-500">A</div>
        <div class="bg-green-300">A</div>
        <div class="bg-green-100">A</div>
        <div class="bg-green-200">A</div>
      </div>
      <div class="grid grid-cols-12 my-4">
        <div class="bg-indigo-500 col-span-4">A</div>
        <div class="bg-indigo-400 col-span-4">B</div>
        <div class="bg-indigo-300 col-span-4">C</div>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="bg-purple-500 col-start-3">A</div>
        <div class="bg-purple-400">B</div>
        <div class="bg-purple-200 col-end-3">C</div>
        <div class="bg-purple-300">D</div>
      </div>
      <div class="grid grid-rows-4 my-4 gap-4">
        <div class="bg-yellow-500 row-span-2">A</div>
        <div class="bg-yellow-400">B</div>
        <div class="bg-yellow-300">C</div>
        <div class="bg-yellow-600">D</div>
      </div>
    </div>
    <div>
      <Button description="Botón">
      </Button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/buttons/Button.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button,
  },
};
</script>
