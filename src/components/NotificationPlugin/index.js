import { createApp } from 'vue'
import Notifications from './Notifications.vue'

const NotificationStore = {
  state: [], // here the notifications will be added
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'right',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true
  },
  setOptions (options) {
    this.settings = Object.assign(this.settings, options)
  },
  removeNotification (timestamp) {
    const indexToDelete = this.state.findIndex(n => n.timestamp === timestamp)
    if (indexToDelete !== -1) {
      this.state.splice(indexToDelete, 1)
    }
  },
  addNotification (notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = { message: notification }
    }

    // if notification is custom made
    if (!notification.timestamp) {
      notification.timestamp = new Date()
      notification.timestamp.setMilliseconds(notification.timestamp.getMilliseconds() + this.state.length)
      notification = Object.assign({}, this.settings, notification)
      // cancel duplicates
      if (!this.state.some(notif => notif.message === notification.message)) {
        this.state.push(notification)
      }
    } else {
      notification = Object.assign({}, this.settings, notification)

      // cancel duplicates
      const dupe = this.state.find(notif => notif.message === notification.message)
      if (dupe) this.removeNotification(dupe.timestamp)

      this.state.push(notification)
    }
  },
  notify (notification) {
    if (Array.isArray(notification)) {
      notification.forEach(notificationInstance => {
        this.addNotification(notificationInstance)
      })
    } else {
      this.addNotification(notification)
    }
  }
}

const NotificationsPlugin = {
  install (app, options) {
    const app2 = createApp({
      data: function () {
        return {
          notificationStore: NotificationStore
        }
      },
      methods: {
        notify (notification) {
          this.notificationStore.notify(notification)
        }
      }
    })
    app2.config.globalProperties.$notify = app.notify
    app2.config.globalProperties.$notifications = app.notificationStore
    app2.component('Notifications', Notifications)
    if (options) {
      NotificationStore.setOptions(options)
    }
  }
}

export default NotificationsPlugin
