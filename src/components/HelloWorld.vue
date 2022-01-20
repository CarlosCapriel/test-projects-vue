<template>
  <div class="container mx-auto my-auto">
    <h1>{{ msg }}</h1>

    <div class="my-5 mx-auto max-w-sm bg-gray-700 shadow-xl">
      <img src="../assets/spacemen.jpg" class="w-full">
      <div class="text-gray-200 text-left px-6 py-4">
        <h1 class="text-lg font-semibold">Title of card</h1>
        <p class="text-sm pb-3">
          The description of the card you know basic information
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum quod rerum tenetur illum dolorum voluptatum quae,
           reiciendis perferendis ea ab? Quaerat eius voluptatem,
           illum rerum ducimus nihil nulla amet repellendus?
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block text-gray-200 bg-gray-500 px-3 py-1 rounded-full mx-3">
          #themanonthemoon
        </span>
        <span class="inline-block text-gray-200 bg-gray-500 px-3 py-1 rounded-full mx-3">
          #spaceman
        </span>
      </div>
    </div>
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
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
