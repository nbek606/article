<template>
   <div class="input-text">
      <b-form-group
         :label="label"
      >
         <b-form-input
            :value="value"
            :class="'form-control ' + inputClass"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            @input="handler($event)"
         />
      </b-form-group>
      <div v-if="errors.input.hasOwnProperty(inputErrorName)">
         <p class="errorInput">{{ errors.input[inputErrorName].join() }}</p>
      </div>
   </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
   name: "InputText",
   props: {
      type: {
         type: String,
         default: "text"
      },
      placeholder: {
         type: String,
         default: ""
      },
      required: {
         type: Boolean,
         default: true
      },
      label: {
         type: String,
         default:""
      },
      inputClass: {
         type: String,
         default:""
      },
      id: {
         type: String,
         default:""
      },
      inputErrorName: {
         type: String,
         default:""
      },
      value: {
         type: String,
         default:""
      }
   },
   data () {
      return {
         inputValue: ""
      }
   },
   computed: {
      ...mapGetters({ 
         errors: 'notification/errors'
      })
   },
   methods: {
      handler (event) {
         this.$emit('input', event);
      }
   }
}
</script>
<style lang="scss">
   .input-text {
      margin: 10px 0;
   }

   .errorInput {
      color: color(danger);
      font-size: 12px;
   }
</style>