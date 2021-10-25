import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  toRef,
  toRefs,
} from 'vue';
import { SubMenuProps } from './interface';
import SubMenuInline from './sub-menu-inline.vue';
import SubMenuPop from './sub-menu-pop.vue';
import useMenu from './hooks/use-menu';
import useLevel from './hooks/use-level';
import IconDown from '../icon/icon-down';
import IconRight from '../icon/icon-right';
import useMenuContext from './hooks/use-menu-context';

export default defineComponent({
  name: 'SubMenu',
  props: {
    /**
     * @zh 唯一标志
     * @en Unique key
     */
    key: {
      type: String,
    },
    /**
     * @zh 子菜单的标题
     * @en The title of the submenu
     */
    title: {
      type: String,
    },
    /**
     * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
     * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
     */
    selectable: {
      type: Boolean,
    },
    /**
     * @zh 是否强制使用弹出模式，`level` 表示当前子菜单的层级
     * @en Whether to force the use of pop-up mode, `level` indicates the level of the current submenu
     */
    popup: {
      type: Boolean as PropType<SubMenuProps['popup']>,
      default: false,
    },
  },
  /**
   * @zh 向下展开的图标
   * @en Icon expand down
   * @slot expand-icon-down
   */
  /**
   * @zh 向右展开的图标
   * @en Icon expand right
   * @slot expand-icon-right
   */
  /**
   * @zh 标题
   * @en Title
   * @slot title
   */
  setup(props: SubMenuProps, { attrs }) {
    const { key } = useMenu();
    const { level } = useLevel();
    const { popup } = toRefs(props);
    const menuContext = useMenuContext();
    const computedPopup = computed(() => {
      const { mode, collapsed, inTrigger } = menuContext;
      const forcePopup = !!(typeof popup.value === 'function'
        ? popup.value(level.value)
        : popup.value);
      return forcePopup || collapsed || inTrigger || mode !== 'vertical';
    });

    onMounted(() => {
      menuContext.collectSubMenuKey && menuContext.collectSubMenuKey(key.value);
    });

    onUnmounted(() => {
      menuContext.removeSubMenuKey && menuContext.removeSubMenuKey(key.value);
    });

    return {
      props,
      attrs,
      computedKey: key,
      computedPopup,
      expandIconDown: toRef(menuContext, 'expandIconDown'),
      expandIconRight: toRef(menuContext, 'expandIconRight'),
    };
  },
  render() {
    const {
      props,
      attrs,
      computedKey,
      computedPopup,
      expandIconDown,
      expandIconRight,
    } = this;
    const _props = {
      ...props,
      ...attrs,
      key: computedKey,
    };
    const _slots = {
      ...this.$slots,
      'expand-icon-down':
        this.$slots['expand-icon-down'] ||
        expandIconDown ||
        (() => <IconDown />),
      'expand-icon-right':
        this.$slots['expand-icon-right'] ||
        expandIconRight ||
        (() => <IconRight />),
    };
    return computedPopup ? (
      <SubMenuPop {..._props} v-slots={_slots} />
    ) : (
      <SubMenuInline {..._props} v-slots={_slots} />
    );
  },
});