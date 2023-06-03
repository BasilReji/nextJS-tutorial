import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage() {
  let router = useRouter();
  let eventID = router.query.eventId;

  const event = getEventById(eventID);

  if (!event) return <p>No Event found</p>;
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
