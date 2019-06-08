import React from 'react';
import { shallow } from 'enzyme';
import ImageComponent from './ImageComponent';

describe('image component tests', () => {
  it('renders the image component', () => {
    const wrapper = shallow(<ImageComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
