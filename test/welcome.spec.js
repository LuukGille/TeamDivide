import { mount } from '@vue/test-utils';
import Welcome from '../src/components/Welcome.vue';

const wrapper = mount(Welcome);

describe('Welcome text', () => {
  it('Shows the welcome text', () => {
    expect(wrapper.vm.$data.name).toBe('Team Divide');
  })
});