import { shallowMount } from '@vue/test-utils';
import PagesIndexComponent from '@/pages/index.vue'

let wrapper

beforeEach(() => {
  // mount メソッドにコンポーネントを渡せば、Vue インスタンスと DOM ノードが返されます。
  // この返り値の wrapper を使って様々なテストコードを書いていきます。
  // mount と shallowMount の違いは、子コンポーネントをスタブ化できることです。
  // ユニットテストでは基本的に他コンポーネントの影響を排除すべきなので、
  // 多くの場合では、子コンポーネントの描画を無視できる shallowMount を用いた方がよいでしょう。
  wrapper = shallowMount(PagesIndexComponent)
})

afterEach(() => {
  wrapper.destroy();
})

describe('Testing pages_index component', () => {
    it('is a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy()
    })
})
