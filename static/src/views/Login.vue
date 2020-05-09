<template>
  <div class="login">
    <div class="card p-3 bg-dark">
      <b-form
        @submit="onSubmit"
      >
        <h1 class="h3 mb-3">
          Login
        </h1>
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
        />
        <b-form-input
          id="password"
          class="mt-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
        />
        <b-button
          class="mt-3"
          type="submit"
          variant="secondary"
        >
          Submit
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
}
</script>

<style scoped>
  .login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
