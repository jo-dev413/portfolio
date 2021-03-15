import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className="navbar">
			<div>
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
			</div>
		</div>
	);
}

export default Navbar;