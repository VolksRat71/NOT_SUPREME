import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem } from '../lib/testUtils';
import SingleItem, { SINGLE_ITEM_QUERY } from '../components/SingleItem';

describe('<SingleItem /> ', () => {
    xit('renders with proper data', async () => {
        const mocks = [
            {
                // when someone makes a request with this query and variable combo
                request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },
                // return this fake data (mocked data)
                result: {
                    data: {
                        item: fakeItem(),
                    },
                },
            },
        ];
        const wrapper = mount(
            <MockedProvider mocks={mocks} >
                <SingleItem id="123" />
            </MockedProvider>
        );

        expect(wrapper.text()).toContain('Loading...');
        await wait();
        wrapper.update();
        // TODO: How are we able to query items everywhere but here?
        // console.log(wrapper.debug())
    })
})

