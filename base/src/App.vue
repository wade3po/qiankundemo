<template>
  <div id="base">
    <div id="nav">
      <router-link to="/">base</router-link><br/>
      <router-link to="/factory">factory</router-link><br/>
      <router-link to="/admin">admin</router-link><br/>
      <router-link to="/frontend">frontend</router-link>
    </div>

    <router-view v-show="$route.name"/>
    <div id="factory" v-show="!$route.name"></div>
	  <div id="admin" v-show="!$route.name"></div>
	  <div id="frontend" v-show="!$route.name"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
