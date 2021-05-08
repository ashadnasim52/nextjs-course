import EventList from '../components/Event/EventList';
import { getFeaturedEvents } from '../dummy-data';

const index = () => {
	const events = getFeaturedEvents();
	return (
		<div>
			<EventList events={events} />
		</div>
	);
};

export default index;
