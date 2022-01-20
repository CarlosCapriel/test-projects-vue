<template>
    <div class="my-5 mx-auto max-w-sm bg-gray-700 shadow-xl">
      <img v-bind:src="src" class="w-full">
      <div class="text-gray-200 text-left px-6 py-4">
        <h1 class="text-lg font-semibold">
            <slot name="titleCard">
                <!-- The title of card -->
            </slot>
        </h1>
        <p class="text-sm pb-3">
          <slot name="content">
              <!-- Content of card -->
          </slot>
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block text-gray-200 bg-gray-500 px-3 py-1
                        rounded-full mx-3" v-for="hashtag in hashtags" :key="hashtag">
                        {{ `#${hashtag}` }}
        </span>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    hashtags: {
      type: Array,
      default: () => {},
    },
    src: {
      type: String,
      default: '',
    },
  },
};
</script>
