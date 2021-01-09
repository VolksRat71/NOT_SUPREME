import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import { fakeCartItem, fakeUser } from '../lib/testUtils';
import Cart, { LOCAL_STATE_QUERY } from '../components/Cart';
import { CURRENT_USER_QUERY } from '../components/User';

const mocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: [fakeCartItem()]
                }
            }
        }
    },
    {
        request: { query: LOCAL_STATE_QUERY },
        result: {
            data: { cartOpen: true }
        }
    }
]

describe('<Cart />', () => {

    test('Renders and matches snapshot', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <Cart />
            </MockedProvider>
        )
        await wait();
        wrapper.update()
        expect(toJSON(wrapper.find('header'))).toMatchSnapshot();
        expect(wrapper.find('CartItem')).toHaveLength(1)
    })
})
