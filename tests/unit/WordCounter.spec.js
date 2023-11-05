import { mount } from '@vue/test-utils';
import WordCounter from '@/components/WordCounter.vue';

describe('WordCountComponent', () => {
  it('renders word count correctly', () => {
    const fileContent = 'Hello world. Hello world!';
    const wrapper = mount(WordCounter, {
      propsData: {
        fileContent,
      },
    });

    // Check if the component renders the correct fileContent
    expect(wrapper.find('pre').text()).toBe(fileContent);

    // Check if the word count is calculated correctly
    expect(wrapper.findAll('li').at(0).text()).toBe('hello: 2');
    expect(wrapper.findAll('li').at(1).text()).toBe('world: 2');
  });

  it('renders empty word count when fileContent is empty', () => {
    const wrapper = mount(WordCounter, {
      propsData: {
        fileContent: '',
      },
    });

    // Check if the word count is empty when fileContent is empty
    expect(wrapper.findAll('li').length).toBe(0);
  });

  it('renders empty word count when fileContent contains no words', () => {
    const wrapper = mount(WordCounter, {
      propsData: {
        fileContent: '   . , ; ! ',
      },
    });

    // Check if the word count is empty when fileContent contains no words
    expect(wrapper.findAll('li').length).toBe(0);
  });
});
