<template>
   <AuthFormPage>
      <b-form @submit.prevent="send">
         <h3 class="title">Регистрация пользователя</h3>
         <InputText
            v-model="form.email"
            placeholder="E-mail"
            label="E-mail"
            input-error-name="email"
         />
         <InputText
            v-model="form.name"
            placeholder="Имя"
            label="Имя"
            input-error-name="name"
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
               Зарегистрироваться
            </button>
         </div>
      </b-form>
      <button class="btn transition" @click="sendLogin">
         Авторизоваться
      </button>
   </AuthFormPage>
</template>
<script>

import AuthFormPage from "@/components/layout/AuthFormPage.vue"

export default {
   name: "SingUp",
   layout: "none",
   components: {
      AuthFormPage
   },
   data () {
      return {
         form: {
            email: "",
            name: "",
            password: ""
         }
      }
   },
   methods: {
      send () {
         this.$store.dispatch('auth/signUp', this.form);
      },
      sendLogin () {
         this.$store.dispatch('notification/clear');
         this.$router.push({ name: 'login' })
      }
   }
}
</script>