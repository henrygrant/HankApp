<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" toggleable="md">
      <b-navbar-brand to="/">Henry Grant</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- left -->
        <b-navbar-nav>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- right -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!auth.status.loggedIn" to="/login">Login</b-nav-item>
          <b-nav-item v-if="!auth.status.loggedIn" to="/register">Register</b-nav-item>
          <b-nav-item v-if="auth.status.loggedIn" @click="logout">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["auth"]),
  methods: {
    logout: function() {
      this.$store.dispatch("auth/logout").catch(err => {
        console.error("Error logging out", err);
      });
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #6c757d !important;
}

#app {
  height: calc(100% - 56px);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
