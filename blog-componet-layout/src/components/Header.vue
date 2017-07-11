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
            </div>
          </nav>
     </div>
</template>
<script>
export default{
  name: 'header'
}
</script>
