<template>
  <div class="content">
    <FadeTransition
      :duration="200"
      mode="out-in"
    >
      <!-- your content here -->
      <router-view />
    </FadeTransition>
  </div>
</template>
<script>
import { FadeTransition } from 'vue3-transitions'
export default {
  components: {
    FadeTransition
  }
}
</script>
<style></style>
