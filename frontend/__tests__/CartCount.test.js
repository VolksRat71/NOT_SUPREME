import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartCount from '../components/CartCount';

describe('<CartCount />', () => {
    test('Renders ', () => {
        shallow(<CartCount count={10} />)
    });

    test('Matches the snapshot ', () => {
        const wrapper = shallow(<CartCount count={10} />)
        expect(toJSON(wrapper)).toMatchSnapshot()
    });

    test('Updates via props ', () => {
        const wrapper = shallow(<CartCount count={50} />)
        expect(toJSON(wrapper)).toMatchSnapshot();

        wrapper.setProps({
            count: 11
        });

        expect(toJSON(wrapper)).toMatchSnapshot();
    });

})

