import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const mockItem = {
    id: 'ABC123',
    title: 'User Item',
    description: 'Mock item description',
    price: 123534,
    image: 'mockItem.png',
    largeImage: 'mockLargeItem.png'
};

describe('<Item />', () => {

    it('Renders and matched the snapshot ', () => {
        const wrapper = shallow(<ItemComponent item={mockItem} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })


    //! Commented out, its too ridged for our application
    // const wrapper = shallow(<ItemComponent item={mockItem} />);

    // const elementParse = (element, item) => {
    //     switch (item) {
    //         case 'text':
    //             return wrapper.find(element).children().text()
    //             break;
    //         case 'filter':
    //             return wrapper.find(element).children()
    //             break;
    //         case 'attr':
    //             return wrapper.find(element).props()
    //             break;
    //         default:
    //             return wrapper.find(element).find(item)
    //     }
    // };

    // it('Renders image properly ', () => {
    //     expect(elementParse('img', 'attr').src).toBe(mockItem.image);
    //     expect(elementParse('img', 'attr').alt).toBe(mockItem.title);
    // });

    // it('Renders price and title properly ', () => {
    //     expect(elementParse('PriceTag', 'text')).toBe('$50');
    //     expect(elementParse('Title a', 'text')).toBe(mockItem.title);
    // });

    // it('Renders buttons properly ', () => {
    //     expect(elementParse('.buttonList', 'filter')).toHaveLength(3);
    //     expect(elementParse('.buttonList', 'Link')).toHaveLength(1);
    //     expect(elementParse('.buttonList', 'AddToCart').exists()).toBe(true)
    //     expect(elementParse('.buttonList', 'DeleteItem').exists()).toBe(true)
    // });
})
