import Link from 'next/link';

const Home = props => (
    <div>
        <h1>Home Page</h1>
        <Link>
            <a href="/sell">
                <h1>Sell Page</h1>
            </a>
        </Link>
    </div>
);

export default Home;