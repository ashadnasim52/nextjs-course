import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
const EventDetailPage = () => {
	const router = useRouter();
	const { query } = router;
	console.log(query);
	const { eventId } = query;
	console.log(eventId);
	const event = getEventById(eventId);
	console.log(event);
	if (!event) {
		return (
			<>
				<h1>No Event Found</h1>
			</>
		);
	}
	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageALt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
};

export default EventDetailPage;
