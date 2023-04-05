import logo from '../img/new_logo_movie.png';

interface IProps {
	page: string;
	setPage: Function;
}

const pages = ['Movies', 'Actors', 'Last Seen', 'Latin Movies'];

export const Header = (props: IProps) => {
	// For every item of pages set pagename and if its active
	const menuItem = (pageName: string) => {
		return (
			<li
				key={pageName}
				onClick={() => props.setPage(pageName)}
				className={props.page === pageName ? 'active' : ''}
			>
				{pageName}
			</li>
		);
	};

	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p className="p-header">
				All kind of movies. Old and new classics. <br />
				<span>Lots seen more than once.</span>
			</p>
			<div>
				{/* Map all items of pages array to display in menu */}
				<ul>{pages.map((item) => menuItem(item))}</ul>
			</div>
		</header>
	);
};
