<template>
  <div id="app">
    <b-navbar 
      variant="dark" 
      type="dark"
      toggleable="md"
    >
      <b-navbar-brand to="/">
        Henry Grant
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse 
        id="nav-collapse" 
        is-nav
      >
        <!-- left -->
        <b-navbar-nav>
          <b-nav-item to="/blog">
            Blog
          </b-nav-item>
          <b-nav-item to="/about">
            About
          </b-nav-item>
        </b-navbar-nav>

        <!-- right -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login">
            Login
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
html, body {
  height: 100%;
  background-color: #6c757d!important;
}

#app {
  height: calc(100% - 56px);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
}
</style>
