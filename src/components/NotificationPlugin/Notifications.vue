<template>
  <div class="notifications">
    <TransitionGroup>
      <notification
        v-for="notification in notifications"
        v-bind="notification"
        :key="notification.timestamp.getTime()"
        :click-handler="notification.onClick"
        @close="removeNotification"
      />
    </TransitionGroup>
  </div>
</template>
<script>
import Notification from './Notification.vue'

export default {
  components: {
    Notification
  },
  props: {
    transitionDuration: {
      type: Number,
      default: 200
    },
    overlap: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      notifications: this.$notifications.state
    }
  },
  watch: {
    overlap: function (newVal) {
      this.$notifications.settings.overlap = newVal
    }
  },
  created () {
    this.$notifications.settings.overlap = this.overlap
  },
  methods: {
    removeNotification (timestamp) {
      this.$notifications.removeNotification(timestamp)
    }
  }
}
</script>
<style>
  /*TODO transition: SlideYUp duration="transitionDuration" group mode="out-in"*/
</style>
