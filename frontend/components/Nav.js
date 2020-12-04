import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = props => (
    <NavStyles>
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