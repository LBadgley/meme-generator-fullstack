import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('meme tests', () => {
  it('renders the Meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
