import { mount } from '@vue/test-utils';
import FileLoader from '@/components/FileLoader.vue';
  
it('displays an error message for empty file selection', async () => {
    const wrapper = mount(FileLoader);

    await wrapper.setData({}); // Clear any existing data
    await wrapper.find('input[type="file"]').setValue(null);

    // Wait for the next tick to ensure Vue updates the component
    await wrapper.vm.$nextTick();

    // Check if the error message is displayed for empty file selection
    expect(wrapper.find('p').text()).toBe('Please select a file.');
    expect(wrapper.emitted().fileLoaded).toBeFalsy(); // No fileLoaded event should be emitted
  });