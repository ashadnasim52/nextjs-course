import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';
import styles from './event-item.module.css';
import Button from '../ui/Button';
const EventItem = ({ event }) => {
	const { title, image, location, id, date } = event;
	return (
		<li className={styles.item}>
			<img src={'/' + image} alt='' />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon /> <time>{new Date(date).toLocaleDateString()}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon /> <address>{location}</address>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Button link={`/events/${id}`}>
					<span>Explore Events</span>{' '}
					<span className={styles.icon}>
						<ArrowRightIcon />
					</span>
				</Button>
			</div>
		</li>
	);
};

export default EventItem;
