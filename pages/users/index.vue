<template>
   <BasePage>
      <div class="global-container">
         <div v-for="(item, index) in list" :key="index">
            <ListUserComponent :user="item" />
         </div>
      </div>
   </BasePage>
</template>
<script>
import BasePage from '@/components/layout/BasePage.vue'
import { mapGetters } from 'vuex'

export default {
   name:"Users",
   components: {
      BasePage
   },
   mounted () {
      this.$store.dispatch('user/list');
   },
   computed: {
      ...mapGetters({
         list: 'user/getList'
      })
   }
}
</script>