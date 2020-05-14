<template>
  <div class="login">
    <div class="card p-3 bg-dark">
      <b-form
        @submit="login"
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
          v-model="form.password"
          class="mt-3"
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
    import router from '../router'

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
            login(e) {
                e.preventDefault()
                this.$store.dispatch('auth/login', this.form)
                    .then(() => {
                        router.push('/')
                    })
                    .catch(err => {
                        console.error("Error logging in", err)
                    })
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
