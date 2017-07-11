<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">Title</div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
            <button type="button" class="btn btn-default" @click="cancel">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'articleDetail',
  data() {
    return {
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: '/articles' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
