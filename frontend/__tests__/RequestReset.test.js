import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import RequestReset, { REQUEST_RESET_MUTATION } from '../components/RequestReset';

const mocks = [
    {
        request: {
            query: REQUEST_RESET_MUTATION,
            variables: { email: 'test_email@email.com' }
        },
        result: {
            data: { requestReset: { message: 'success', __typename: 'Message' } }
        }
    }
]

describe('<RequestReset />', () => {
    test('Renders and matches snapshot ', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <RequestReset />
            </MockedProvider>
        );
        const form = wrapper.find('form[data-test="form"]')
        expect(toJSON(form)).toMatchSnapshot()
    })

    test('Call the Mutation ', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <RequestReset />
            </MockedProvider>
        );
        // Simulate typing in email
        wrapper.find('input').simulate(
            'change', {
            target: {
                name: 'Test',
                value: 'test_email@email.com'
            }
        })
        expect(toJSON(wrapper.find('form'))).toMatchSnapshot()
    })
})
