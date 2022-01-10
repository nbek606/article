<template>
   <BasePage>
      <div class="global-container">
         <h1>{{$route.params.details}}</h1>
      </div>
   </BasePage>
</template>
<script>
import BasePage from "@/components/layout/BasePage.vue";
export default {
   name: "ArticleDetails",
   components: {
      BasePage
   }
}
</script>