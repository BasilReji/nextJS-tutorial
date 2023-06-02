import { humanReadableDate } from "@/utils/date-time";
import { formatLocation } from "@/utils/string-operations";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

function EventItem(props) {
  const { title, location, date, image, id } = props;

  const exploreEvent = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate(date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatLocation(location)}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreEvent}>
              <span>Explore Event</span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
