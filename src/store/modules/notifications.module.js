import NotificationService from '../../services/notification.service'

const notificationsModule = {
  namespaced: true,
  // ==================================
  // == State
  // ==================================
  state: {
    notifications: [],
    status: {}
  },

  // ==================================
  // == Mutations
  // ==================================
  mutations: {
    NOTIF_REQUEST: (state) => {
      state.status = { isRetrieving: true }
    },

    NOTIF_SUCCESS: (state, notifications) => {
      state.notifications = notifications
      state.status = {}
    },

    NOTIF_FAILURE: (state, reason) => {
      state.status = { error: reason }
    },

    NOTIF_READ_REQUEST: (state) => {
      state.status = { isReading: true }
    },

    NOTIF_READ_SUCCESS: (state, index) => {
      state.notifications[index].isRead = true
      state.status = {}
    },

    NOTIF_READ_FAILURE: (state, reason) => {
      state.status = { error: reason }
    }
  },

  // ==================================
  // == Actions
  // ==================================
  actions: {
    fetch: ({ commit, rootState }) => {
      commit('NOTIF_REQUEST')
      NotificationService.getAllFrom(rootState.account.user._id)
        .then(
          res => {
            commit('NOTIF_SUCCESS', res.notifications)
          },
          err => {
            commit('NOTIF_FAILURE', err.data.message)
          })
    },

    read: ({ commit, state, rootState }, { notifId }) => {
      commit('NOTIF_READ_REQUEST')
      NotificationService.read(rootState.account.user._id, notifId)
        .then(
          res => {
            const index = state.notifications.findIndex(notif => notif._id === notifId)
            commit('NOTIF_READ_SUCCESS', index)
          },
          err => {
            commit('NOTIF_READ_FAILURE', err.data.message)
          })
    }
  },

  // ==================================
  // == Getters
  // ==================================
  getters: {
    all: state => {
      return state.notifications
    },
    notRead: state => {
      return state.notifications.filter(notif => notif.isRead === false)
    }
  }
}

export default notificationsModule
