<template>
     <div class="">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Blog Componet</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><router-link to="/blog">Blog Artikel</router-link></li>
              </ul>
                <ul class="nav navbar-nav navbar-right">
               <li><router-link to="/create">Create Artikel</router-link></li>
                <li><span class="glyphicon glyphicon-user"></span><router-link to="/signup">Sign Out <router-link></a></li>
                <!-- <li><span class="glyphicon glyphicon-log-in"></span><router-link to="/login">Login</router-link></a></li> -->
              </ul>
            </div>
          </nav>
     </div>
</template>
<script>
export default{
  name: 'header'
}
</script>
