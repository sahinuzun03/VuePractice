<template>
  <nav>
    <router-link :to="{name : 'home'}">Home</router-link> |
    <router-link :to="{name : 'ShowPost'}">Show Post</router-link> | 
    <router-link :to="{name : 'AddPost'}">Add Post</router-link> 
  </nav>
</template>

<script>
export default {
    name:"Navbar",

}
</script>

<style>

</style>