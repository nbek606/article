<template>
   <BasePage>
      <div class="global-container">
         <h1>{{$route.params.point}}</h1>
      </div>
   </BasePage>
</template>
<script>
import BasePage from "@/components/layout/BasePage.vue";
export default {
   name: "ArticlePoint",
   components: {
      BasePage
   }
}
</script>