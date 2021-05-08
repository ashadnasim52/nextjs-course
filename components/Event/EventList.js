import EventItem from './EventItem';
import styles from './EventList.module.css';
const EventList = (props) => {
	const { events } = props;
	return (
		<ul className={styles.list}>
			{events.map((event) => (
				<EventItem event={event} key={event.id} />
			))}
		</ul>
	);
};

export default EventList;
