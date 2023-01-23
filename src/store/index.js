import { createStore } from 'vuex'
import AccountModule from './modules/account.module'
import NotificationsModule from './modules/notifications.module'
import CalendarModule from './modules/calendar.module'
import SysconfModule from './modules/sysconf.module'
import TasksModule from './modules/tasks.module'
import GradesModule from './modules/grades.module'
import LayoutModule from './modules/layout.module'

export const store = createStore({
  modules: {
    account: AccountModule,
    calendar: CalendarModule,
    notifications: NotificationsModule,
    sysconf: SysconfModule,
    tasks: TasksModule,
    grades: GradesModule,
    layout: LayoutModule
  },
  strict: process.env.NODE_ENV !== 'production'
})
