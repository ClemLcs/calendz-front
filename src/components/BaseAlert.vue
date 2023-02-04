<template>
  <Transition>
    <div
      v-if="visible"
      :class="[
        `alert-${type}`,
        { 'alert-dismissible': dismissible }
      ]"
      class="alert"
      role="alert"
    >
      <slot v-if="!dismissible" />
      <template v-else>
        <template v-if="icon || $slots.icon">
          <slot name="icon">
            <span
              class="alert-icon"
              data-notify="icon"
            >
              <i :class="icon" />
            </span>
          </slot>
        </template>

        <span class="alert-text"> <slot /> </span>

        <slot name="dismiss-icon">
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="dismissAlert"
          >
            <span aria-hidden="true">×</span>
          </button>
        </slot>
      </template>
    </div>
  </Transition>
</template>
<script>

export default {
  name: 'BaseAlert',
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: 'Whether alert is dismissible (closeable)'
    },
    icon: {
      type: String,
      default: '',
      description: 'Alert icon to display'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    dismissAlert () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
