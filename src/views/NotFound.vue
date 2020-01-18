<template lang="html">
  <div class="not-found">
      <div class="container mt-3">
          <h1 id="message">{{ message }}</h1>
          <h1 id="description">{{ description }}</h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "NotFound",
    data() {
        return {
            message: "404",
            description: "PAGE NOT FOUND"

        }
    }
}
</script>

<style lang="css">
#message {
    //color: red;
    font-size: 2000%;
    font-weight: bold;
    text-align: center;
}
#description {
    font-size: 500%;
    font-weight: bold;
    text-align: center;
}
</style>
