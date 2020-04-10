import { shallowMount } from '@vue/test-utils';
import PagesAddComponent from '@/pages/add.vue'

describe('Test pages/add.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PagesAddComponent);
  })

  afterEach(() => {
    wrapper.destroy();
  })

  it('pages/addコンポーネントが表示される', () => {
    // expect: 期待する

    // wrapperはVueインスタンスである
    expect(wrapper.isVueInstance).toBeTruthy()
    // wrapperが存在する
    expect(wrapper.exists()).toBe(true);
    // wrapperのルート要素にcontainerクラスがついている
    expect(wrapper.classes()).toContain('container');
    // wrapperのルート要素はsectionである
    expect(wrapper.is('section')).toBe(true);
    // wrapperのテキストは「Sample」である
    expect(wrapper.text()).toBe('本を追加する  検索');
    // wrapperのマークアップ検証(改行が必要だと思われるのでスキップ)
    // expect(wrapper.html()).toBe(****);
    expect(wrapper.contains('b-form-input')).toBe(true);
    expect(wrapper.contains('b-button')).toBe(true);
  });

  it('表示の検証', () => {
    expect(wrapper.contains('b-form-input')).toBe(true);
    expect(wrapper.contains('b-button')).toBe(true);

    const input = wrapper.findAll('b-form-input');
    expect(input.length).toBe(1);
    expect(input.is('b-form-input[placeholder="本のタイトル"]')).toBe(true);
    expect(input.at(0).text()).toBe('');
    // 入力フォームのテキストを更新したい
    input.at(0).element.value = 'PWA'
    // 検索ボタン押下
    wrapper.find('b-button').trigger('submit');
    // 検索結果の表示確認
    const buttons = wrapper.findAll('b-button');
    expect(buttons.length).not.toBe(0);
  });

})
