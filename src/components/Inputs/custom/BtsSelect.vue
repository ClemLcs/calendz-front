<template>
  <base-input
    :error="getError(veeScope ? `${veeScope}.bts` : 'bts')"
    :valid="isValid(veeScope ? `${veeScope}.bts` : 'bts')"
    class="w-100"
    label="Option BTS"
  >
    <el-select
      v-model="inputValue"
      v-validate="'required|boolean'"
      :disabled="disabled"
      name="bts"
    >
      <el-option
        v-for="(option, index) in options"
        :key="index"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </base-input>
</template>

<script>
import { store } from '@/store'
import { ElSelect, ElOption } from 'element-plus'
import BaseInput from '@/components/Inputs/BaseInput.vue'

export default {
  components: {
    BaseInput,
    [ElSelect.name]: ElSelect,
    [ElOption.name]: ElOption
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      doc: 'Select\'s value'
    },
    disabled: {
      type: Boolean,
      default: true,
      doc: 'Whether the select should be disabled or not'
    },
    veeScope: {
      type: String,
      default: '',
      doc: 'If form has a scope'
    }
  },
  data () {
    return {
      inputValue: this.value,
      options: [
        { label: 'Oui', value: true },
        { label: 'Non', value: false }
      ]
    }
  },
  watch: {
    inputValue (newVal) {
      this.$emit('input', newVal)
    }
  },
  mounted () {
    this.inputValue = store.state.account.user.bts
  },
  methods: {
    getError (name) {
      return this.errors.first(name)
    },
    isValid (name) {
      return this.validated && !this.errors.has(name)
    }
  }
}
</script>

<style>

</style>
