import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //children prop will always be the content between the opening and closing tags of a component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
