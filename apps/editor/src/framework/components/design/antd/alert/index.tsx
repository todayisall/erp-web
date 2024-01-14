import { createReactMaterial } from '@erp/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@erp/icons'

export const __AntAlert__ = createReactMaterial(View, {
  displayName: '警告提示',
  custom: {
    useCanvas: true,
  },
  props: {
    message: 'Informational Notes',
    description: 'Additional description and information about copywriting.'
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
