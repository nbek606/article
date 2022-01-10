<template>
   <AuthFormPage>
      <div class="error">
         <p v-if="error.component">
            {{ error.component }}
         </p>
      </div>
      <b-form @submit.prevent="send">
         <h3 class="title">Вход</h3>
         <InputText
            v-model="form.email"
            placeholder="E-mail"
            label="E-mail"
            input-error-name="email"
         />
         <InputText
            v-model="form.password"
            placeholder="Пароль"
            label="Пароль"
            type="password"
            input-error-name="password"
         />
         <div class="buttons">
            <button class="btn"> 
               Войти
            </button>
         </div>
      </b-form>
      <button class="btn transition" @click="sendSignUp">
         Зарегистрироваться
      </button>
   </AuthFormPage>
</template>
<script>
import AuthFormPage from "@/components/layout/AuthFormPage.vue"
import { mapGetters } from 'vuex'

export default {
   name: "Login",
   layout: "none",
   components: {
      AuthFormPage
   },
   data () {
      return {
         form: {
            email: "",
            password: ""
         }
      }
   },
   computed: {
      ...mapGetters({
         error: 'notification/errors'
      })
   },
   methods: {
      send () {
         this.$store.dispatch('auth/login', this.form);
      },
      sendSignUp () {
         this.$store.dispatch('notification/clear');
         this.$router.push({ name: 'sign-up' })
      }
   },
}
</script>