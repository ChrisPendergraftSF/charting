import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Chartholder from './Chartholder';
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

describe('<Chartholder />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Chartholder />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
