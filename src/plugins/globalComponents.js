
import BaseInput from '../components/Inputs/BaseInput'

import BaseDropdown from '../components/BaseDropdown'
import Card from '@/components/Cards/Card'
import Modal from '@/components/Modal'
import StatsCard from '@/components/Cards/StatsCard'
import BaseButton from '@/components/BaseButton'
import Badge from '@/components/Badge'
import RouteBreadcrumb from '@/components/Breadcrumb/RouteBreadcrumb'
import BaseCheckbox from '@/components/Inputs/BaseCheckbox'
import BaseSwitch from '@/components/BaseSwitch'
import BaseRadio from '@/components/Inputs/BaseRadio'
import BaseProgress from '@/components/BaseProgress'
import BasePagination from '@/components/BasePagination'
import BaseAlert from '@/components/BaseAlert'
import BaseNav from '@/components/Navbar/BaseNav'
import BaseHeader from '@/components/BaseHeader'
import TagsInput from '@/components/Inputs/TagsInput'
import PasswordStrength from '@/components/PasswordStrength'
import ApiErrors from '@/components/ApiErrors'
import Placeholder from '@/components/Placeholder'

// Tasks
import TaskType from '@/components/Tasks/TaskType'
import TaskCore from '@/components/Tasks/TaskCore'

import { ElInput, ElTooltip, ElPopover } from 'element-plus'

// Help
import HelpSection from '@/components/Help/HelpSection'

const GlobalComponents = {
  install (app) {
    app.component(Badge.name, Badge)
    app.component(BaseAlert.name, BaseAlert)
    app.component(BaseButton.name, BaseButton)
    app.component(BaseCheckbox.name, BaseCheckbox)
    app.component(BaseHeader.name, BaseHeader)
    app.component(BaseInput.name, BaseInput)
    app.component(BaseDropdown.name, BaseDropdown)
    app.component(BaseNav.name, BaseNav)
    app.component(BasePagination.name, BasePagination)
    app.component(BaseProgress.name, BaseProgress)
    app.component(BaseRadio.name, BaseRadio)
    app.component(BaseSwitch.name, BaseSwitch)
    app.component(Card.name, Card)
    app.component(Modal.name, Modal)
    app.component(StatsCard.name, StatsCard)
    app.component(RouteBreadcrumb.name, RouteBreadcrumb)
    app.component(ElInput.name, ElInput)
    app.component(TagsInput.name, TagsInput)
    app.component(PasswordStrength.name, PasswordStrength)
    app.component(ApiErrors.name, ApiErrors)
    app.component(Placeholder.name, Placeholder)

    app.component(TaskType.name, TaskType)
    app.component(TaskCore.name, TaskCore)

    app.component(HelpSection.name, HelpSection)

    app.use(ElTooltip)
    app.use(ElPopover)
  }
}

export default GlobalComponents
