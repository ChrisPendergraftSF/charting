import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ChartFilters from './ChartFilters';
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

describe('<ChartFilters />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<ChartFilters />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
