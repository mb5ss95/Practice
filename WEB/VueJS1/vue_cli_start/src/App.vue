<template>
    <div id="app">
        <h1>App</h1>
        <Header/>
        <Main/>
    </div>
</template>

<script>
import Header from "./components/Header"
import Main from "./components/Main"
export default{
    components:{
        Header,
        Main,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
