import Items from '../components/Items';

const Home = props => (
    <>
        <Items page={parseFloat(props.query.page) || 1} />
    </>
);

export default Home;