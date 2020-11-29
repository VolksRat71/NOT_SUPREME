import Nav from './Nav'

const Header = props => (
    <>
        <div className="bar">
            <a href="/">Not Supreme</a>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
        <Nav />
    </>
)

export default Header;