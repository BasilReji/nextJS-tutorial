import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEvents() {
  let events = getAllEvents();
  let router = useRouter();

  const findEventsHandler = (year, month) => {
    let path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;
