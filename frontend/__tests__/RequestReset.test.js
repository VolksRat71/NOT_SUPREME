import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import { fakeUser } from '../lib/testUtils';
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

    xtest('Call the Mutation ', async () => {
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
        wrapper.find('form').simulate('submit')
        await wait();
        wrapper.update()
        // TODO: Why are we throwing an error on component
        // console.log(wrapper.debug())
    })
})
