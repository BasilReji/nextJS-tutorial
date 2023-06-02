import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  return (
    <Link className={classes.btn} href={props.link} children={props.children} />
  );
}

export default Button;
