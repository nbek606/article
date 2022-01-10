<template>
   <div class="auth-form-page">
      <div class="form-page">
         <slot />
      </div>
   </div>
</template>
<script>
export default {
   name: "AuthFormPage",
   
}
</script>
<style lang="scss">
   .auth-form-page {
      width: 600px;
      margin: 100px auto;
      border: 1px solid color(gray);
      border-radius: 10px;
      
      .form-page {
         margin-top: 30px;
         padding: 30px 100px;

         .title {
            text-align: center;
            color: color(dark);
         }

         .buttons {
            flex: 1 1 auto;
            margin-bottom: 20px;
         }

         button {
            background-color: color(blue);
            color: color(white);
            width: 200px;
         }
      }
      .error {
         color: color(danger);
         text-align: center;
      }
   }
</style>