<template>
    <button class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2
                        px-4 rounded-lg shadow-md sm:bg-indigo-400 md:bg-blue-400 lg:bg-pink-400">
        {{ description }}
    </button>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      default: 'Hola',
    },
  },
};
</script>
