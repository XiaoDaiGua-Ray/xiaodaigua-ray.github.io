/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-01-04
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import './index.scss'

import { NLayoutHeader, NSpace, NTooltip, NDropdown, NTag } from 'naive-ui'
import RayIcon from '@/components/RayIcon/index'
import RayTooltipIcon from '@/components/RayTooltipIcon/index'
import SettingDrawer from './components/SettingDrawer/index'

import { useSetting } from '@/store'
import { useLanguageOptions } from '@/language/index'
import { useAvatarOptions } from './hook'
import { removeCache, getCache } from '@/utils/cache'
import screenfull from 'screenfull'

import type { IconEventMapOptions, IconEventMap } from './type'

/**
 *
 * 本来想通过写数据配置化的方式实现顶部的功能小按钮, 结果事实发现...
 *
 * 但是我又不想改, 就这样吧
 */

const SiderBar = defineComponent({
  name: 'SiderBar',
  setup() {
    const settingStore = useSetting()

    const { t } = useI18n()
    const { updateLocale, changeSwitcher } = settingStore
    const modelDrawerPlacement = ref(settingStore.drawerPlacement)
    const showSettings = ref(false)
    const person = getCache('person')

    /**
     *
     * 顶部左边操作栏
     */
    const leftIconOptions = [
      {
        name: 'reload',
        size: 18,
        tooltip: 'LayoutHeaderTooltipOptions.Reload',
      },
    ]
    /**
     *
     * 顶部右边提示框操作栏
     */
    const rightTooltipIconOptions = [
      {
        name: 'fullscreen',
        size: 18,
        tooltip: 'LayoutHeaderTooltipOptions.FullScreen',
        eventKey: 'screen',
      },
      {
        name: 'github',
        size: 18,
        tooltip: 'LayoutHeaderTooltipOptions.Github',
        eventKey: 'github',
      },
      {
        name: 'setting',
        size: 18,
        tooltip: 'LayoutHeaderTooltipOptions.Setting',
        eventKey: 'setting',
      },
    ]
    const iconEventMap: IconEventMapOptions = {
      reload: () => {
        changeSwitcher(false, 'reloadRouteSwitch')

        setTimeout(() => changeSwitcher(true, 'reloadRouteSwitch'), 1.5 * 1000)
      },
      setting: () => {
        showSettings.value = true
      },
      github: () => {
        window.open('https://github.com/XiaoDaiGua-Ray/ray-template')
      },
      fullscreen: () => {
        if (screenfull.isEnabled) {
          screenfull.toggle()
        } else {
          window.$message.warning('您的浏览器不支持全屏~')
        }
      },
    }

    const handleIconClick = (key: IconEventMap) => {
      iconEventMap[key]?.()
    }

    const handlePersonSelect = (key: string | number) => {
      if (key === 'logout') {
        window.$dialog.warning({
          title: '提示',
          content: '您确定要退出登录吗',
          positiveText: '确定',
          negativeText: '不确定',
          onPositiveClick: () => {
            window.$message.info('账号退出中...')
            removeCache('all-sessionStorage')
            setTimeout(() => window.location.reload(), 300)
          },
        })
      } else {
        window.$message.info('这个人很懒, 没做这个功能~')
      }
    }

    return {
      leftIconOptions,
      rightTooltipIconOptions,
      t,
      handleIconClick,
      modelDrawerPlacement,
      showSettings,
      updateLocale,
      handlePersonSelect,
      person,
    }
  },
  render() {
    return (
      <NLayoutHeader class="layout-header" bordered>
        <NSpace
          class="layout-header__method"
          align="center"
          justify="space-between"
        >
          <NSpace align="center">
            {this.leftIconOptions.map((curr) => (
              <NTooltip>
                {{
                  trigger: () => (
                    <RayIcon
                      customClassName="layout-header__method--icon"
                      name={curr.name}
                      size={curr.size}
                      onClick={this.handleIconClick.bind(this, curr.name)}
                    />
                  ),
                  default: () => this.t(curr.tooltip),
                }}
              </NTooltip>
            ))}
          </NSpace>
          <NSpace align="center">
            {this.rightTooltipIconOptions.map((curr) => (
              <RayTooltipIcon
                iconName={curr.name}
                tooltipText={this.t(curr.tooltip)}
                onClick={this.handleIconClick.bind(this, curr.name)}
              />
            ))}
            <NDropdown
              options={useLanguageOptions()}
              onSelect={(key: string | number) =>
                this.updateLocale(String(key))
              }
              trigger="click"
            >
              <RayIcon
                customClassName="layout-header__method--icon"
                name="language"
                size="18"
              />
            </NDropdown>
            <NDropdown
              options={useAvatarOptions()}
              onSelect={this.handlePersonSelect.bind(this)}
              trigger="click"
            >
              <NTag checkable size="large">
                {{
                  icon: () => (
                    <RayIcon
                      customClassName="layout-header__method--icon"
                      name="ray"
                      size="18"
                    />
                  ),
                  default: () => this.person.name,
                }}
              </NTag>
            </NDropdown>
          </NSpace>
        </NSpace>
        <SettingDrawer
          v-model:show={this.showSettings}
          placement={this.modelDrawerPlacement}
        />
      </NLayoutHeader>
    )
  },
})

export default SiderBar
