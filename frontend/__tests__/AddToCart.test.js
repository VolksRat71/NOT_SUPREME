import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import { ApolloConsumer } from 'react-apollo';
import { fakeCartItem, fakeUser } from '../lib/testUtils';
import AddToCart, { ADD_TO_CART_MUTATION, LOCAL_STATE_QUERY } from '../components/AddToCart';
import { CURRENT_USER_QUERY } from '../components/User';

const mocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: []
                }
            }
        }
    },
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: []
                }
            }
        }
    },
    {
        request: { query: ADD_TO_CART_MUTATION, variables: { id: 'abc123' } },
        result: {
            data: {
                addToCart: {
                    ...fakeCartItem(),
                    quantity: 1
                }
            }
        }
    }
]

describe('<AddToCart />', () => {
    test('Renders and matches snapshot', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks} >
                <AddToCart id="abc123" />
            </MockedProvider>
        )
        await wait();
        wrapper.update();
        expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
    });

    test('Adds and Item to cart when clicked', async () => {
        let apolloClient;
        const wrapper = mount(
            <MockedProvider mocks={mocks} >
                <ApolloConsumer>
                    {client => {
                        apolloClient = client;
                        return <AddToCart id="abc123" />
                    }}
                </ApolloConsumer>
            </MockedProvider>
        )
        await wait();
        wrapper.update();
        const { data: { me } } = await apolloClient.query({ query: CURRENT_USER_QUERY })
        expect(me.cart).toHaveLength(0);
        // add item to cart
        wrapper.find('button').simulate('click');
        await wait();
        const { data: { me: meTwo } } = await apolloClient.query({ query: CURRENT_USER_QUERY })
        expect(meTwo).toMatchSnapshot()
    })

    test('Changes from add to adding when clicked', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <AddToCart id="abc123" />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.text()).toBe('Add to Cart')
        wrapper.find('button').simulate('click');
        expect(wrapper.text()).toBe('Adding to Cart')
    });
})
