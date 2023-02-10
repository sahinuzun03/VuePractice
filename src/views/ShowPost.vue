<template>
  <div>
    <Navbar/>
    <h1>SHOWPOST</h1>
    <!-- <div>
        <table>
            <thead>
                <tr>ID</tr>
                <tr>TITLE</tr>
                <tr>BODY</tr>
            </thead>
            <tbody>
                <tr v-for="data in datas" :key="data.id">
                    <td>{{ data.id }}</td>
                    <td>{{ data.title }}</td>
                    <td>{{ data.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>-->
  </div> 
</template>

<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
    name:"ShowPost",
    components:{
        Navbar,
    },
    // setup(){
    //     async function getPost(){
    //         let datas = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
    //     }

    //     getPost();
    //     return {datas}
    // }

}
</script>

<style>

</style>