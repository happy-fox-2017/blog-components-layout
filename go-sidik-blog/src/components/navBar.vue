<template>
  <v-toolbar>
    <v-toolbar-title>Go Sidik Blog</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-dialog v-model="dialog" lazy absolute>
        <v-btn flat slot="activator">
          <v-icon left>library_books</v-icon>
          New Article
        </v-btn>
        <v-card>
          <v-card-title>
            <div class="headline">Create New Article</div>
          </v-card-title>
          <v-card-text>
            <v-text-field
              name="input-1-3"
              label="Title"
              single-line
              v-model="newPost.title"
            ></v-text-field>
            <v-text-field
              name="input-7-1"
              label="Content"
              multi-line
              v-model="newPost.content"
            ></v-text-field>
            <v-text-field
              name="input-1-3"
              label="Author"
              single-line
              v-model="newPost.author"
            ></v-text-field>
            <v-text-field
              name="input-1-3"
              label="Tags"
              single-line
              v-model="newPost.tags"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
            <v-btn class="green--text darken-1" flat="flat" @click.native="postGoGo()">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dialog: false,
      test: true,
      newPost: {
        title: "",
        content: "",
        author: "",
        tags: ""
      }
    }
  },
  methods: {
    postGoGo() {
      let self = this
      axios.post('http://localhost:3000/api/article', {
        title: self.newPost.title,
        content: self.newPost.content,
        author: self.newPost.author,
        tags: self.tagsReal
      }).then(function(response) {
        console.log(response.data);
        self.dialog = false
        self.$emit("update-kuy")
      }).catch(function(err) {
        alert(err)
      })
    }
  },
  computed: {
    tagsReal() {
      return this.newPost.tags.split(" ")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
}
</style>
