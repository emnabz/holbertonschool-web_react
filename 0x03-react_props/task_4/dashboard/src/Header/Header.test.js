import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';


describe("<Header />", () => {
    it("Header renders without crashing", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).toEqual(true);
    });
    it("Verify that the components render img", () => {
      const wrapper = shallow(<Header />);
      wrapper.update();
      expect(wrapper.find("div.header img")).toHaveLength(1);
    });
    it("Verify that the components render h1", () => {
      const wrapper = shallow(<Header />);
      wrapper.update();
      expect(wrapper.find("div.header h1")).toHaveLength(1);
    });
  });
