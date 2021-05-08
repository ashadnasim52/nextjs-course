import { useRouter } from 'next/router';
import EventList from '../../components/Event/EventList';
import { getFilteredEvents } from '../../dummy-data';

const EventDetailPage = () => {
	const router = useRouter();
	const filterData = router.query.slug;

	console.log(filterData);

	if (!filterData) return <h1 className='center'>Loading..........</h1>;

	const year = parseInt(filterData[0]);
	const month = parseInt(filterData[1]);
	if (isNaN(year) || isNaN(month))
		return <h1 className='center'>Invalid filterssss</h1>;

	const filteredEvents = getFilteredEvents({ year, month });
	if (!filteredEvents || filteredEvents.length === 0) {
		return <p>No events found</p>;
	}

	return <EventList events={filteredEvents} />;
};

export default EventDetailPage;
