<template>
  <div class="register">
    <div class="card p-3 bg-dark">
      <b-form
        @submit="onSubmit"
      >
        <h1 class="h3 mb-3">
          Register
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
        <b-form-input
          id="confirmPassword"
          v-model="form.passwordConfirm"
          class="mt-3"
          type="password"
          required
          placeholder="Confirm Password"
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
    import router from "../router";

    export default {
        name: 'Register',
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
                this.$store.dispatch('auth/register', this.form)
                    .then(() => {
                        router.push('/')
                    })
                    .catch(err => {
                        console.error("Error registering user", err)
                    })
            }
        },
    }
</script>

<style scoped>
  .register {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
