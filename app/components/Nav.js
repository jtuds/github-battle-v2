let React = require('react');
let NavLink = require('react-router-dom').NavLink;

function Nav () {
	return (
		<ul className='nav'>
			<li>
				<NavLink exact activeClassName='active-nav-item' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active-nav-item' to='/battle'>
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active-nav-item' to='/popular'>
					Popular
				</NavLink>
			</li>
		</ul>
	);
}

module.exports = Nav;
