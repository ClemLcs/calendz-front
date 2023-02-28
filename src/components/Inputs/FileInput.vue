<template>
  <div class="custom-file">
    <input
      id="customFileLang"
      v-bind="$attrs"
      type="file"
      class="custom-file-input"
      lang="en"
    >
    <label
      class="custom-file-label"
      for="customFileLang"
    >
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'FileInput',
  inheritAttrs: false,
  props: {
    initialLabel: {
      type: String,
      default: 'Select file'
    }
  },
  data () {
    return {
      files: []
    }
  },
  computed: {
    listeners () {
      return {
        // @TODO: $listeners is deprecated, but i don't know what to replace it with
        // ...this.$listeners,
        change: this.fileChange
      }
    },
    label () {
      const fileNames = []
      for (const file of this.files) {
        fileNames.push(file.name)
      }
      return fileNames.length ? fileNames.join(', ') : this.initialLabel
    }
  },
  methods: {
    fileChange (evt) {
      this.files = evt.target.files
      this.$emit('change', this.files)
    }
  }
}
</script>
<style>
</style>
