import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy/dummy-data";

function HomePage() {
  let featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
