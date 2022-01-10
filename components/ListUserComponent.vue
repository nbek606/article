<template>
   <div class="user-block">
      <div class="user-block-logo">
         {{ getFirstSymbol }}
      </div>
      <div class="user-block-name">
         <h3>{{ user.name }}</h3>
      </div>
      <div class="user-block-root">
         <p v-if="isAdmin"> Админ </p>
      </div>
      <div class="user-block-edit">
         <span class="material-icons" @click="send"> edit </span>
      </div>
   </div>
</template>
<script>

import { mapGetters } from "vuex"

export default {
   name: "ListUserComponent",
   props: {
      user: {
         type: [Array, Object],
         required: true
      }
   },
   computed: {
      isAdmin () {
         return this.user.is_admin != 0
      },
      getFirstSymbol () {
         return this.user.name.substring(0,1).toUpperCase();
      }
   },
   methods: {
      send() {
         this.$router.push({ name: 'users-id', params: { id: this.user.id }})
      }
   }
}
</script>
<style lang="scss">
   .user-block {
      border-bottom: 1px solid color(gray);
      display: flex;
      padding: 20px 20px;

      &-logo {
         height: 60px;
         width: 60px;
         border-radius: 100%;
         color: color(white);
         background-color: color(blue);
         text-align: center;
         line-height: 60px;
         font-size: 30px;
         margin-right: 20px;
      }

      &-name {
         height: 60px;
         width: calc(70% - 60px);

         h3 {
            line-height: 60px;
         }
      
      }

      &-root {
         height: 60px;
         width: 20%;

         p {
            line-height: 60px;
         }
      }
      &-edit {
         height: 60px;
         width: 10%;
         text-align: center;

         span {
            line-height: 60px;
            border-bottom: 1px solid color(gray);
         }

         span:hover {
            color: color(blue);
            cursor: pointer;
         }
      }
   }
</style>