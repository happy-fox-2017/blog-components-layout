<template lang="html">
     <div class="container">
              <form class="form-horizontal">
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="name">Name :</label>
                    <div class="col-sm-10">
                     <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="name">
                    </div>
                  </div>
                   <div class="form-group">
                     <label class="control-label col-sm-2" for="email">Email:</label>
                     <div class="col-sm-10">
                       <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
                     </div>
                   </div>
                   <div class="form-group">
                     <label class="control-label col-sm-2" for="pwd" v-model="password">Password:</label>
                     <div class="col-sm-10">
                       <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                     </div>
                   </div>
                   <div class="form-group">
                     <div class="col-sm-offset-2 col-sm-10">
                       <button type="submit" class="btn btn-primary" @click="login" style="width:150px">Submit</button>
                     </div>
                   </div>
            </form>
     </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      status: true
    }
  },
  methods: {
    login () {
      let self = this
      axios.post('http://localhost:3000/api/users/sigin', {
        name: self.name,
        email: self.email,
        password: self.password
      })
  .then((response) => {
    self.name = ''
    self.email = ''
    localStorage.setItem('token', response.data.token)
    self.status = false
    self.reset()
    self.$router.push('/')
  })
  .catch((err) => {
    console.log(err)
  })
    },
    validdata () {
      if (this.name === '' || this.email === '') {
        return false
      } else {
        true
      }
    },
    reset () {
      this.name = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style lang="css">
</style>
