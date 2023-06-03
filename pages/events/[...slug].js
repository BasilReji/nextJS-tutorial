import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEvent(props) {
  let router = useRouter();
  let { slug = [] } = router.query;
  if (slug && slug.length) {
    let numYear = +slug[0];
    let numMonth = +slug[1];

    if (
      isNaN(numMonth) ||
      isNaN(numYear) ||
      numMonth > 12 ||
      numYear > 2022 ||
      numYear < 2020
    )
      return (
        <Fragment>
          <ErrorAlert>
            <p>Ambada Pulusu, Invalid Filter</p>
          </ErrorAlert>
          <div className="center">
            <Button link={"/events"}>Show All Events</Button>
          </div>
        </Fragment>
      );
    let filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth,
    });

    if (filteredEvents && !filteredEvents.length) {
      return (
        <Fragment>
          <ErrorAlert>
            <p>Madangi po Makkale, No events for the chosen filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link={"/events"}>Show All Events</Button>
          </div>
        </Fragment>
      );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
      <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />
      </Fragment>
    );
  }
  return <p>No data</p>;
}

export default FilteredEvent;
