<template>
   <div>
      <Header />
      <LeftPanel />
      <nuxt />
   </div>
</template>
<script>
import Header from "@/components/layout/Header"
import LeftPanel from "@/components/layout/LeftPanel"

export default {
   name: "default",
   components: {
      Header,
      LeftPanel
   }
}
</script>