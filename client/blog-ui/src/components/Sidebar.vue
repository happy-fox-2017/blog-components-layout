<template lang="html">
    <aside class="menu">
  <p class="menu-label">
    Articles
  </p>
  <ul class="menu-list">
    <li v-for="data in datas"><router-link :to="'/article/'+data._id">{{data.title}}</router-link></li>
    <!-- <li><a>Customers</a></li> -->
  </ul>
  
</aside>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['datas']
}
</script>

<style lang="css">
</style>
