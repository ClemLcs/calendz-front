<template>
  <div>

    <!-- =================================== -->
    <!-- == ELEMENT-UI'S SELECT ============ -->
    <!-- =================================== -->
    <base-input
      v-if="!legacy"
      :error="getError(veeScope ? `${veeScope}.groupe` : 'groupe')"
      :valid="isValid(veeScope ? `${veeScope}.groupe` : 'groupe')"
      :label="label"
      class="w-100">
      <el-select
        v-validate="'required|valid_group'"
        v-model="inputValue"
        :disabled="disabled"
        name="groupe">
        <el-option
          v-for="(option, index) in options"
          :key="index"
          :label="option.value"
          :value="option.value"/>
      </el-select>
    </base-input>

    <!-- =================================== -->
    <!-- == LEGACY SELECT ================== -->
    <!-- =================================== -->
    <base-input
      v-if="legacy"
      :error="getError('groupe')"
      :valid="isValid('groupe')"
      :label="label"
      class="mb-3"
      prepend-icon="ni ni-hat-3">
      <select
        v-validate="'required|valid_group'"
        v-model="inputValue"
        :disabled="disabled"
        name="groupe"
        class="form-control">
        <option
          value=""
          hidden>Votre groupe</option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value">{{ option.value }}</option>
      </select>
    </base-input>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  },
  props: {
    value: {
      type: String,
      default: '',
      doc: 'Value'
    },
    disabled: {
      type: Boolean,
      default: true,
      doc: 'Whether the select should be disabled or not'
    },
    label: {
      type: String,
      default: '',
      doc: `Ìnput's label`
    },
    grade: {
      type: String,
      default: null,
      doc: `Previously selected grade`
    },
    legacy: {
      type: Boolean,
      default: false,
      doc: `Whether we should use a legacy select or element-ui's select`
    },
    veeScope: {
      type: String,
      default: '',
      doc: 'If form has a scope'
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  computed: {
    options () {
      switch (this.grade) {
        case 'WIS1':
        case 'WIS2':
        case 'WIS3':
        case 'WIS4':
        case 'WIS5':
        case 'SN1':
        case 'SN2':
          return [
            { value: 'G1' },
            { value: 'G2' },
            { value: 'G3' }
          ]
        case 'B3':
        case 'I1':
          return [
            { value: 'G1 (dev)' },
            { value: 'G2 (dev)' },
            { value: 'G1 (infra)' },
            { value: 'G2 (cyber)' },
            { value: 'G3 (data)' }
          ]
        case 'I2':
          return [
            { value: 'G1 (dev)' },
            { value: 'G2 (dev)' },
            { value: 'G1 (infra)' },
            { value: 'G2 (cyber)' },
            { value: 'G3 (data)' }
          ]
        default:
          return [
            { value: 'Commencez par séléctionner votre classe' }
          ]
      }
    }
  },
  watch: {
    inputValue (newVal) {
      this.$emit('input', newVal)
    }
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
