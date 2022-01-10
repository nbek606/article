<template>
   <div class="left-panel">
      <b-nav>
         <b-nav-item 
            class="left-panel-item" 
            v-for="(item, index) in menu" 
            :key="index"
            :to="item.link"
            :active="$route.path.includes(item.link)"
            exact
         >
            <div class="icon">
               <div :is="item.icon" />
            </div>
            <div class="title">
               {{item.title}}
            </div>
         </b-nav-item>>
      </b-nav>
   </div>
</template>
<script>
import { mapGetters } from "vuex"

import JavaScript from "@/static/svg/js.svg?inline"
import TypeScript from "@/static/svg/ts.svg?inline"
import Users from "@/static/svg/users.svg?inline"
import All from "@/static/svg/all.svg?inline"

export default {
   name: "LeftPanel",
   components: {
      JavaScript,
      TypeScript,
      Users,
      All
   },
   computed: {
      ...mapGetters ({
         menu: 'menu/list'
      })
   }
}
</script>
<style lang="scss">
   .left-panel {
      position: fixed;
      top: $headerHeight;
      height: calc(100vh - $headerHeight);
      background-color: color(dark);
      width: $widthLeftPanel;
      padding-top:40px;

      &-item {
         width: 100%;
         height: 40px;

         .nav-link {
            display: flex;
            line-height: 40px;
            padding: 0 20px;
            cursor: pointer;
            color: color(gray);
         }

         .icon {
            width: 25px;
            height: 25px;
            margin-right: 10px;

            svg {
               border-radius: 5px;
               width: 100%;
               height: 100%;
            }
         }

         .title {
            font-size: 20px;
         }
      }
      .nav-link:hover {
         background-color: color(blue);
         color: color(white)
      }
   }
</style>