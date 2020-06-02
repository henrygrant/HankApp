<template>
  <div class="register">
    <div class="card p-3 bg-dark">
      <b-form @submit="register">
        <h1 class="h3 mb-3">Register</h1>
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          :state="validateState('username')"
          type="text"
          required
          placeholder="Username"
        />
        <b-form-input
          id="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
          class="mt-3"
          type="password"
          required
          placeholder="Password"
        />
        <b-form-input
          id="confirmPassword"
          v-model="$v.form.passwordConfirm.$model"
          :state="validateState('passwordConfirm')"
          class="mt-3"
          type="password"
          required
          placeholder="Confirm Password"
        />
        <b-button
          :disabled="$v.form.$anyError"
          class="mt-3"
          type="submit"
          variant="secondary"
        >Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { validationMixin } from "vuelidate";
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      passwordConfirm: {
        required,
        minLength: minLength(8),
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    register(evt) {
      evt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$store
        .dispatch("auth/register", this.form)
        .then(() => {
          this.$store.dispatch("auth/login", this.form).catch(err => {
            console.error("Error logging in", err);
          });
          router.push("/");
        })
        .catch(err => {
          console.error("Error registering user", err);
        });
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    }
  }
};
</script>

<style scoped>
.register {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
