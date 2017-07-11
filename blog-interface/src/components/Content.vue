<template>
  <div class="Content">
    <h1>Summary of content</h1>
    <ul>
      <li class="summary" v-for="content in data">{{content.summary}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
.Content{
  padding-top: 80px;
}

.summary{
  margin-bottom: 20px;
}

</style>
