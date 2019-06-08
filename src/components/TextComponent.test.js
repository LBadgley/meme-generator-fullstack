import React from 'react';
import { shallow } from 'enzyme';
import TextComponent from './TextComponent';

describe('text component test', () => {
  it('renders the text component', () => {
    const wrapper = shallow(<TextComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
