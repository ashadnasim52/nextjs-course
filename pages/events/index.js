import EventSearch from '../../components/Event/event-search';
import EventList from '../../components/Event/EventList';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
const AllEventPage = () => {
	const events = getAllEvents();
	const router = useRouter();
	const findEventHandler = (year, month) => {
		const path = `/events/${year}/${month}`;

		router.push(path);
	};
	return (
		<>
			<EventSearch onSearch={findEventHandler} />

			<EventList events={events} />
		</>
	);
};

export default AllEventPage;
