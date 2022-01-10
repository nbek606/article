<template>
   <BasePage>
      <div class="global-container">
         <div class="form">
            <h2>Редактирование пользователя</h2>
            <b-form @submit.prevent="send">
               <InputText 
                  v-model="form.name"
                  label="Имя"
               />
               <InputText 
                  v-model="form.email"
                  label="Email"
               />
            
               <button class="save-btn btn">
                  Сохранить
               </button>
            </b-form>
         </div>
      </div>
   </BasePage>
</template>
<script>
import BasePage from "@/components/layout/BasePage.vue";
import { mapGetters } from "vuex"

export default {
   name: "UserDetail",
   components: {
      BasePage
   },
   mounted () {
      this.$store.dispatch('user/detail', this.userId )
         .then((response) => {
            this.form = {...this.form, ...response}
         }
      );
   },
   data () {
      return {
         form: {
            name: "",
            email: ""
         }
      }
   },
   computed: {
      ...mapGetters({
         detail: 'user/getDetail'
      }),

      userId () {
         return this.$route.params.id
      }
   },
   methods: {
      send () {
         this.$store.dispatch('user/update', { id: this.userId, data:this.form})
             .then((response) => {
                console.log(response)
                if(response) {
                   this.$router.push({ name: 'users' })
                }
             })
      }
   }
}
</script>
<style lang="scss">
   .form {
      width: 600px;
      margin: auto;
      .save-btn {
         color: color(white);
         background-color: color(blue);
      }

      h2 {
         margin: 30px 0px;
      }
   }
</style>