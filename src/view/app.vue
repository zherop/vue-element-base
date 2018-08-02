<template>
  <div id="app" class="app-wrap">
	<h1>公共头部</h1>
	<div>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'app',

    components:{
    },

    data(){
      return {
      }
    },
    
    created(){
    },

    methods: {
    }
  }
</script>

<style scoped>
</style>