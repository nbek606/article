<template>
   <nav class="header-nav">
      <div class="header-nav-logo">
         <div class="header-nav-logo-block">
          
         </div>
      </div>
      <div class="header-nav-right">
         <div class="header-nav-right-block">
            <div class="name">
               {{ user.name }}
            </div>
            <div class="delimiter">
               |
            </div>
            <div class="logout" @click="logout">
               Выход
            </div>
         </div>
      </div>
   </nav>
</template>
<script>
import Logo from "@/static/svg/logo.svg?inline"
import { mapGetters } from "vuex"
export default {
   name: "Header",
   components: {
      Logo
   },
   computed: {
      ...mapGetters({
         user: 'auth/user'
      })
   },
   methods: {
      logout () {
         this.$store.dispatch('auth/logout')
         this.$nextTick(() => { 
            this.$router.push('/login')
         })
      }
   }
}
</script>
<style lang="scss">
   .header-nav {
      display: flex;
      width: 100%;
      border-bottom: 1px solid color(gray);
      height: $headerHeight;
      top: 0;
      background-color: color(white);
      position: fixed;

      &-logo {
         width: $widthLeftPanel;
         background: color(logo-color);

         &-block {
            padding: 0 20px;
            display: flex;

            h1 {
               margin-right: 20px;
               font-size: 54px;
               color: color(white);
               margin-top: 10px;
               margin-bottom: 10px;
            }
            svg {
               margin: auto auto;
               height: 80px;
            }
         }
      }

      &-right {
         width: calc(100% - $widthLeftPanel);
         line-height: 80px;

         &-block {
            float: right;
            display: flex;
            margin-right: 20px;

            .name, .logout {
               color: color(dark);
               font-size: 25px;
            }

            .logout {
               cursor: pointer;
            }

            .delimiter {
               color: color(dark);
               font-size: 28px;
               margin-left: 10px;
               margin-right: 10px;
            }
         }
      }
   }
</style>