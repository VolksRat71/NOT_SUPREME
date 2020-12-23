import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = props => (
    <NavStyles>
        <User>
            {({ data: { me } }) => {
                console.log(me)
                if (me) return <p>{me.name}</p>
                return null;
            }}
        </User>
        <Link href="/items">
            <a>
                <p>Shop</p>
            </a>
        </Link>
        <Link href="/sell">
            <a>
                <p>Sell</p>
            </a>
        </Link>
        <Link href="/signup">
            <a>
                <p>Signup</p>
            </a>
        </Link>
        <Link href="/orders">
            <a>
                <p>Orders</p>
            </a>
        </Link>
        <Link href="/me">
            <a>
                <p>Account</p>
            </a>
        </Link>
    </NavStyles>
)

export default Nav;