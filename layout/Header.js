import Link from 'next/link';
import styles from './main-header.module.css';
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>Next Meetup</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link href='/events'>Browse All Event</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
